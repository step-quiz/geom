# Coordinating two agents on `solucions/` — read before writing any solution file

This file exists because two Claude instances write to the same
`solucions/` folder in separate sessions, with no shared memory between
them. Everything either agent needs to know to avoid colliding with the
other lives here. If you are a Claude agent about to add a solution
file to this project, read this whole file first — it is short and
prevents real mistakes.

`solucions/` is **teacher-facing only**. It is not linked from `index.html`
or from any file under `js/`, and it must stay that way — students reach
the app through the SPA, never through `sol.html` or `solucions/`. Do not
add any link from the SPA into `solucions/`, and do not treat missing
integration as a bug to fix.

## The two agents

- **Agent-sol-2D** — writes solutions for every question with
  `dimensio: "2D"` in `js/data/preguntes-dades.js`, except the hidden ones
  (see below). 88 questions are 2D, 10 of them are hidden, so the scope is
  **78 questions**.
- **Agent-sol-3D** — writes solutions for every question with
  `dimensio: "3D"`, except the hidden ones. 42 questions are 3D, 5 of them
  are hidden (`q18a`, `q18b`, `q67`, `q102`, `q106`), so the scope is
  **37 questions**. The 37 ids, for reference:
  `q08a, q08b, q25, q45, q47, q48, q49, q50, q51, q52, q53, q56, q57,
  q58, q59, q60, q61, q62, q63, q65, q66, q68, q81, q82, q91, q92, q93,
  q100, q101, q103, q104, q105, q107, q108, q109, q123, q126`.

Together: 130 questions in the book, minus 15 hidden, is 115 solutions
to write. Each agent only ever adds files to its own block in `sol.html`
(see below) and never edits, renames, or reorders the other agent's
lines or files.

**Never guess which dimension a question belongs to.** Always check the
`dimensio` field on the actual question object in
`js/data/preguntes-dades.js` before writing a solution — don't infer it
from context, from which itinerari a question happens to appear in, or
from a guess about the topic. If you are Agent-sol-2D and a question
turns out to be `dimensio: "3D"` (or vice versa), it is not yours — skip
it.

## The 15 hidden questions — never write a solution for these

`js/ui/llista.js` defines `EXERCICIS_AMAGATS`, a hard-coded list of 15
question ids the project owner has explicitly asked to keep out of the
public list and out of every themed itinerari:

```
q19, q20, q34, q35, q84, q88, q18a, q18b, q21, q24, q83, q87, q67, q102, q106
```

**Ten of these are `dimensio: "2D"` and five are `dimensio: "3D"`**
(`q18a`, `q18b`, `q67`, `q102`, `q106`). Until the Aug 2026 documentation
audit this file claimed all fifteen were 2D — they are not, and the claim
contradicted this file's own arithmetic (all-2D would have left
Agent-sol-2D with 73 questions, not the 78 stated above). **Both agents**
must check the list, not just Agent-sol-2D.

Cross-reference the id against this list (or against
`window.geoLlista.esAmagada(id)` if running inside the app's own JS
context) before writing anything. If a question is on this list, it does
not get a solution file, full stop, regardless of how interesting or how
requested it might otherwise seem.

This list can only change by explicit owner instruction. Neither agent
adds to it, removes from it, or reinterprets it — if new information
suggests a question should or shouldn't be hidden, that's a question for
the project owner, not something to decide unilaterally while writing a
solution.

## Shared stylesheet — `solucions/sol.css`

`solucions/sol.css` is **shared by both agents**, not owned by either
one. Its own header says so explicitly ("Estil de les 115 pàgines de
solució") — it was designed from the start to style every solution
page, 2D and 3D alike. Every `.html` file in `solucions/`, from both
agents, loads it with the same `<link rel="stylesheet" href="sol.css?v=1">`.
It defines one thing neither `tokens.css`, `base.css`, nor
`components.css` had: `--accent-sanguina`, a red sampled directly from
the hand-drawn figures (`assets/img/pistes/fig-034.png`), used for the
"Solució" eyebrow and the step border.

Never create a second copy of this file, never assume it "belongs" to
whichever agent's dimension happens to be nearby in the folder, and
never treat it as missing just because your own agent didn't write it.
If a fresh `solucions/` folder is ever missing `sol.css`, that's a
packaging mistake to fix by restoring the existing file unchanged — not
a cue to author a new one from scratch. (This exact mistake happened
once already, when a folder migration copied all eleven `.html` files
but left `sol.css` behind — every existing page rendered unstyled,
`fetch("sol.css?v=1")` 404ing from inside `solucions/`, until it was
copied back over. Check this first if pages suddenly look unstyled.)

## Naming convention

**Filename = `<id>.html`, saved directly under `solucions/`. Nothing
else.**

`<id>` is copied verbatim from the `id` field of the question object in
`js/data/preguntes-dades.js` — not a sequence number, not a zero-padded
index, not a shortened form. Examples actually in use:
`solucions/q01.html`, `solucions/q08b.html`, `solucions/q25.html`,
`solucions/q40_implicit.html`.

Two things make this the convention worth keeping:

- **Ids are already globally unique across the whole book** (both agents
  checked: 130 questions, 130 unique ids, confirmed directly against
  `preguntes-dades.js`), so this filename can never collide between the
  two agents, or with itself, by construction — no coordination step is
  needed to avoid a clash, the id itself guarantees it.
- **It's the same id used everywhere else in the project** — the SPA's
  own hash routes (`#q25`), `ORDRE_PREGUNTES`, `ITINERARIS_TEMATICS`,
  `GUIES` all key off this same string. A solution file's name tells you
  immediately, with no lookup, exactly which question object it
  corresponds to.

Two ids need a small amount of care because they don't look like the
"question number" a human would expect from the book's own numbering:

- **`q08a` / `q08b`** — question 8 in the book splits into two parts;
  both have their own guide and both need their own solution file
  (`q08a.html`, `q08b.html`), not a single `q08.html`.
  `q08a` is `dimensio: "2D"`, `q08b` is `dimensio: "3D"` — they belong to
  *different* agents despite sharing a book-question number, so don't
  assume adjacency in the book means the same agent handles both.
- **`q40_implicit.html`** — the question a human would call "question
  40" does not have the id `q40` in the data; its real id is
  `q40_implicit` (confirmed directly against `preguntes-dades.js` more
  than once in this project's history — it's an easy thing to get wrong
  by guessing). Always look up the actual `id` field rather than
  deriving it from the book's visible question number.

### What this replaces

Earlier in this project's history, solution files used two different,
now-abandoned naming schemes:

1. A plain sequential counter with no documented relationship to
   anything (`sol-01.html`, `sol-02.html`, … up to `sol-35.html`), used
   before any naming convention existed at all.
2. A short-lived intermediate scheme, `sol-<id>.html` (e.g.
   `sol-q25.html`), used for exactly two files before it was retired in
   favor of the current, simpler `<id>.html`.

All files that existed under either old scheme have already been copied
into `solucions/` under the current `<id>.html` naming as part of this
migration — this was a one-time cleanup pass, not an ongoing task for
either agent. If you are an agent starting fresh from here, you do not
need to rename anything: just follow the convention above for every new
file you add, and never resurrect either retired scheme.

## `sol.html` — the shared index

`sol.html`, at the project root, has **two** indexes, and it matters which
one you are looking at.

1. **The hand-written lists** at the top, split into "2D — Agent-sol-2D" and
   "3D — Agent-sol-3D". These stopped being maintained early on: they hold
   13 entries against 115 solution files on disk. The "(78 preguntes en
   total)" / "(37 preguntes en total)" counts in those headers are the
   agents' full *scope*, not a running tally of what's written. Don't read
   them as progress.
2. **The "Totes les solucions trobades" section** below, which is the real
   index. It probes at page load for `solucions/<id>.html` for every id in
   `js/data/preguntes-dades.js` and lists whatever actually exists, split by
   `dimensio` and skipping anything already named above. Nothing to
   maintain: add the file and it appears.

**Caveat worth knowing before you debug it:** that section uses `fetch()`,
which `file://` blocks — the very constraint the rest of the project is
built around. Opened by double-click, it silently shows nothing and you
only see the 13 hand-written entries. Serve the project
(`python3 -m http.server`) to see the full index. This is a known
limitation of a teacher-facing page, not a bug to rush into fixing.

So: **an agent adding a solution does not need to touch `sol.html` at
all.** If you do add a `<li>` to your own section, never touch the other
agent's section — not to fix a typo, not to reorder it, not to add a note.

## Content expectations (both agents)

These aren't new — they're the standard this project's earlier solution
files were already held to, restated here so both agents apply them the
same way:

- **Derive the solution from the question's real guide**, i.e. the same
  question's entry in `js/data/guies-dades.js` (`GUIES.<id>`, four
  progressive hints). A solution is that same mathematical argument
  written as a single closed piece of prose with numbered steps, not
  invented from scratch and not contradicting what the hints already
  establish.
- **Look at every referenced figure before writing about it** — both the
  question's own illustration and any guide-hint figures the solution's
  steps reference (`fig-NNN.png` under `assets/img/pistes/`, or the
  question's own image under `assets/img/`). Confirm the visual
  construction actually matches the geometric claim being made before
  describing it in prose; don't rely on filenames or hint text alone.
- **Reuse the existing `sol.css` visual language** (`.solucio__marc`,
  `.solucio__pas`, `.solucio__resultat`, `.question-entry__prompt`, the
  shared `../css/tokens.css` / `base.css` / `components.css`) rather
  than introducing new component styles. New solution files should be
  visually indistinguishable in style from the ones already written.
- **If the guide's own check is explicitly non-numeric** (e.g. a
  conceptual question with no natural number to verify), don't force an
  invented numeric check into the final "Comprovació" step just to have
  one — describe what a correct answer establishes instead, the way the
  existing `q63` solution does.
- Every `<img>` needs real `alt` text describing what the figure shows,
  not the filename.

## Verification checklist before handing anything back

1. Confirm each question's `dimensio` and `id` directly against
   `js/data/preguntes-dades.js` — don't rely on memory from earlier in
   the conversation, re-check every time.
2. Confirm none of the ids you're about to write already appear in
   `EXERCICIS_AMAGATS`.
3. Serve the project locally and load each new `solucions/<id>.html`
   directly — confirm every `<img>` actually loads (`naturalWidth > 0`),
   not just that the HTML references a plausible-looking path.
4. Run `python3 verifica_projecte.py` from the project root and confirm
   it still reports full pass. `solucions/` and `sol.html` sit outside
   what this script checks structurally, but a broken doc-reference (a
   citation to a `.md` file that doesn't exist, for instance) will still
   surface as a warning — don't ignore one just because it originates
   from a file the script doesn't otherwise validate.
5. Update `sol.html`'s own section (only your own section) with the new
   entries and an accurate count.
