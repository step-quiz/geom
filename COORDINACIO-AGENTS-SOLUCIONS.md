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
  `dimensio: "2D"` in `js/data/preguntes-dades.js`, except the 15 hidden
  ones (see below). 78 questions in total.
- **Agent-sol-3D** — writes solutions for every question with
  `dimensio: "3D"`, except any that are hidden. 37 questions in total.
  (As it happens, none of the 15 hidden questions are 3D, so
  Agent-sol-3D's real scope is the full 37.) The 37 ids, for reference:
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

All 15 are `dimensio: "2D"`. This is Agent-sol-2D's responsibility to
check, every time, before starting a new solution — cross-reference the
id against this list (or against `window.geoLlista.esAmagada(id)` if
running inside the app's own JS context) before writing anything. If a
question is on this list, it does not get a solution file, full stop,
regardless of how interesting or how requested it might otherwise seem.

This list can only change by explicit owner instruction. Neither agent
adds to it, removes from it, or reinterprets it — if new information
suggests a question should or shouldn't be hidden, that's a question for
the project owner, not something to decide unilaterally while writing a
solution.

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

`sol.html`, at the project root, is a plain HTML index of every solution
written so far, split into two sections with explicit headers ("2D —
Agent-sol-2D", "3D — Agent-sol-3D"). Each agent:

- adds one `<li>` per new solution, inside its own section only,
  linking to `solucions/<id>.html`;
- never touches the other section — not to fix a typo, not to reorder
  it, not to add a note to one of its entries;
- keeps the running "(N preguntes en total)" count in its own section
  header accurate as it adds entries, so a reader can see progress at a
  glance without counting `<li>`s.

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
