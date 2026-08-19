# HANDOFF — cold-start briefing for the next Claude session

**To:** a cold-start Claude agent, given this file plus the `geom` repository
(either the ZIP delivered at the end of the previous session, or the owner's
GitHub repo **after** applying `lliurament-sync-github-diff.zip` — see §1,
this distinction matters and is the first thing to resolve).

**From:** the agent that completed Part 1, Part 2, the three intro demos
(twice — first a 5-panel static redesign, then a full step-by-step
mechanism), the glossary expansion, the thematic category filter, the
2D/3D filter, and a series of UI/UX polish rounds. That agent is now out of
context (66 artifacts in the conversation) and cannot continue.

**Read this whole file before touching anything.** It is long because the
project has accumulated real subtlety — skipping sections has caused real
bugs in past sessions (documented below, in §5, so you don't repeat them).

---

## 0. The one thing to verify before anything else

```bash
python3 verifica_projecte.py
```

It must print `Tot correcte.` (36 checks). If it doesn't, **stop and
report** — you've been handed a repository in an unexpected state, and
guessing why will waste more time than asking.

---

## 1. CRITICAL: the owner's GitHub repo may be out of sync

This is the most important thing in this document. During the previous
session, the owner uploaded their live GitHub repo as a ZIP for review, and
a systematic audit (not an assumption) found it was **missing two entire
deliveries**:

- **Part 1** (47 hand-drawn enunciat images) — `preguntes-dades.js` in the
  uploaded repo still had only 67 of 130 questions with an `imatge` field,
  not 114. 35 of the 47 PNG files were also absent from `assets/img/`.
- The **circumference icon fix** (`irregularity` lowered from 0.025 to
  0.006 so it reads as a clean circle at menu size instead of "some
  strange conic").
- The **focus-ring fix** on the two filter toggles (border-color was
  already fixed to `transparent`, but `:focus-visible` still used a brown
  `box-shadow` that looked like the same border after a mouse click in
  some browsers — fixed to an `outline` with `offset` instead).

**Before you write a single line of code**, run this diff between whatever
repo state you've been given and confirm it matches what this document
describes as "current" (§2). If it doesn't:

```bash
# from the repo root, assuming you have both directories available
diff -rq /path/to/given-repo /path/to/this-repo --exclude=.git
```

A file named `lliurament-sync-github-diff.zip` (41 files) was delivered to
the owner specifically to close this gap — if you're starting from the raw
GitHub repo and that ZIP hasn't been applied yet, apply it first, then
also delete these three obsolete files manually (a diff ZIP can never
delete files, this has come up repeatedly across deliveries):

```
assets/img/demo/demo-01-angle-sum.png
assets/img/demo/demo-02-isosceles.png
assets/img/demo/demo-03-four-triangles.png
```

**Do not assume the repo you're given is complete just because
`verifica_projecte.py` passes.** That script checks internal consistency
(does every question with an `imatge` field have a real file on disk,
etc.) — it does NOT check "does this repo have every delivery the owner
has ever received." A repo frozen at an earlier point in time, with
internally-consistent-but-outdated data, will pass it cleanly. Cross-check
the numbers in §2 against what you actually see in the data files.

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
| Questions with an enunciat image | 114 / 130 (67 scanned + 47 hand-drawn) |
| Questions with a full guide | 130 / 130 |
| Guides with a second image at Pista 2 | 31 / 130 |
| Glossary terms | 53, of which 26 have a figure |
| Glossary terms detected inline | inside enunciat text AND inside Pista 1-4 text (never comprovació, never i-després) |
| Thematic categories | 6 defined, 5 shown in the filter menu (aritmetica_algebra excluded, see §3) |
| Hidden questions (excluded from the list view, not deleted) | 11: `q18a q18b q19 q20 q21 q24 q34 q35 q83 q84 q88` |
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
```

There is no note yet for the focus-ring fix or the README rewrite (this
session, done directly, small enough not to need one — mention it in your
own delivery note if you ship alongside other work).

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
2. **16 questions have no enunciat image**, out of the 63 that originally
   lacked one — 47 were chosen, these 16 were explicitly rejected (pure
   algebraic questions with no natural figure, or open questions where an
   example image would half-answer them). See `ANALISI-GRAFICS-NOUS.md`
   for the reasoning per question if this decision is ever revisited.
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
- `js/data/preguntes-dades.js` ← `build_preguntes_dades.py` (needs a
  source JSON not included in the repo; won't run as-is on a fresh clone
  — see its own header). Exception: `enunciat.ca`, `pista.*`,
  `notaEditorial.*`, and the Part-1 `imatge` fields ARE hand-edited after
  generation — regenerating without merging these back would lose them.
- `js/data/guies-dades.js` ← `python3 parse_guies.py`, reading
  `docs/guies/GUIES-LOT-N.md`. Edit the `.md`, never the generated `.js`.

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
   repeatedly caught only by looking: incidence bugs (a point drawn at
   the *ideal* formula position instead of the *actual* hand-jittered
   trajectory — always read points off a real curve with `.pointAtT()` /
   `.pointAtAngle()`, which `handSegment`/`handEllipse` both expose, never
   recompute the ideal coordinate), "notation that lies" (a marked
   right-angle or equal-length tick that isn't actually true — verify
   numerically, e.g. dot product for perpendicularity, before trusting a
   figure with a geometric claim), figures clipped by canvas margins,
   labels colliding with geometry, wobble/irregularity values tuned for
   large figures looking wrong at small icon scale (see §5.1 for the
   concrete example).
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

## 5. Hard-won lessons — read before drawing or coding anything

### 5.1 — `irregularity` / `wobble` don't scale linearly with figure size

`hand-draw.js`'s `irregularity` parameter (used by `handEllipse`) is a
*percentage* of the shape's characteristic dimension. At the scale most
guide figures are drawn (radius 150-300px), 0.02-0.03 reads as an
imperceptible, pleasant hand-wobble. At icon scale (radius ~36px, meant
to be viewed at ~40px on screen), the *same percentage* becomes enough
*absolute* pixel deviation to break circular symmetry and read as "some
odd non-circular shape" — this exact bug shipped once this session and
had to be fixed reactively (`icona-circumferencia.png`, fixed by dropping
to 0.006). **When drawing anything small** (icons, small glossary
figures), test at the real display size before publishing, not just at
the rendered canvas's native resolution — resize the PNG down and look at
it, the same way a phone screen will.

### 5.2 — Distinguish "never saved" from "user explicitly chose empty"

Both `localStorage.getItem(key)` returning `null` (key never set) and a
saved value that happens to be `"[]"` (user actively chose "none/all")
can look the same if you naively do
`JSON.parse(localStorage.getItem(key)) || defaultValue`. They are not the
same thing, and conflating them caused a real bug risk this session: the
category filter's own invariant treats an empty array as "all selected,"
so a naive default-value fallback would have made a *first-time visitor*
see "all categories" instead of the newly-requested "only Triangles"
default. Fixed by checking `localStorage.getItem(key) === null` explicitly
before parsing. Apply the same care anywhere a persisted default is
introduced or changed.

### 5.3 — CSS `border-color` and `box-shadow` can look identical to a user

A visible ring around a button can come from `border`, `outline`, or
`box-shadow` — three different properties that render almost identically
depending on color and offset. When an owner reports "I fixed the border
but I still see a brown ring," don't assume the fix didn't apply; check
every rule that could paint a ring at that same location, including
`:hover` and `:focus-visible` states, which are easy to forget when
fixing the base/`:active` state. This happened for real this session
(border fixed correctly two deliveries ago; the *focus ring*, a separate
`box-shadow` in the project's `--focus-ring` token, was still brown and
visible after a mouse click in some browsers — Safari shows
`:focus-visible` after a mouse click more often than Chromium does, so
this kind of bug can be invisible in your own testing browser and real
for the owner).

### 5.4 — A diff ZIP can never delete a file

Every delivery this project ships is a ZIP of new/changed files, applied
on top of the owner's existing repo. This mechanism **cannot express
"delete this file."** Every time a delivery makes a file obsolete (e.g.
replacing the old 3-strip demo images with 15 individual panel images),
the delivery note must say explicitly, in its own section, exactly which
files to delete manually — and you must remember this when verifying
your own work end-to-end (a full "apply every ZIP in sequence" test will
NOT match your working copy unless you also manually delete the files
your own notes told the owner to delete).

### 5.5 — Reuse the same interaction mechanism instead of inventing a new one

Twice this session, a new feature turned out to be a variation on an
existing, working mechanism rather than something new: the step-by-step
demo rewrite reused `detall.js`'s exact reveal-one-at-a-time pattern
(`pintaGuia`/`revela`) instead of inventing a new one; the category
filter reused the 2D/3D toggle's persisted-state pattern but deliberately
changed one invariant (empty = "all" instead of "never both off"). Before
building new interactive UI, check whether `llista.js`, `detall.js`, or
`demo.js` already solve a structurally similar problem — refactor and
extend rather than duplicate.

### 5.6 — Verify castellanisms and non-Catalan text before shipping

`verifica_projecte.py` includes a castellanism check across guide/demo
text. It has caught real mistakes (e.g. `después` typed instead of
`després`). Any new Catalan prose — delivery notes included — should be
grepped for `después` and similar before considering it done; the check
in the script only covers guide/demo content fields, not every `.md`
note, so don't rely on it alone for prose outside those fields.

### 5.7 — This project has NO test framework beyond `verifica_projecte.py` and manual Playwright scripts

There's no CI, no `npm test`. Verification, every single delivery, has
meant: `python3 verifica_projecte.py` (structural/data checks) plus a
hand-written Playwright script (using the pre-installed
`/home/claude/.npm-global/lib/node_modules/playwright` package) exercising
the actual rendered page — click through reveal buttons, check
`img.naturalWidth > 0` on every visible image, count DOM elements,
screenshot and visually inspect. Write these scripts fresh each time;
none are checked into the repo as reusable test files. This is
deliberate given the `file://`-only constraint (no dev server to point a
real test runner at easily) — don't try to introduce a different testing
approach without discussing it with the owner first, it would be a real
architecture change.

---

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
