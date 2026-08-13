# HANDOFF — completing the proof guides

> **NOTA D'ESTAT (afegida després, no forma part de l'handoff original).**
> Aquest document és una fotografia del moment del lliurament 5 (52/130,
> abans de reprendre'l). El protocol que descriu —convenis de dibuix, escala
> de quatre nivells, format de lliurament— continua vigent sense excepcions
> i regeix encara els lliuraments 9 i 10. Però les XIFRES concretes d'aquest
> document ("52 of 130", "53 figures") ja NO reflecteixen l'estat actual.
> Per l'estat real, consulta:
> - `README.md` — comptador actualitzat i visió general.
> - `docs/guies/NOTA-LOT-N.md` (fins a N=8) — cada lliurament fet des
>   d'aquest document.
> - `PROJECTES-TECHNICAL-REFERENCE.md` §9–§11 — glossari, itinerari, intro
>   "què és una demostració", i l'ampliació recent del glossari.
> - `HANDOFF-LLIURAMENT-9.md` / `HANDOFF-LLIURAMENT-10.md` — els dos
>   encàrrecs actualment en marxa per completar les 33 preguntes restants.
>
> En el moment d'escriure aquesta nota: **97 de 130 preguntes tenen guia**,
> totes les 130 tenen `enunciat.ca`, i el glossari té 53 termes (1 amb
> figura).

**To:** a cold-start Claude Sonnet agent (successor to "agent IMG"), given this
file plus the `geom` repository.
**Task:** write proof guides and hint figures for the **78 questions that do not
have one yet**, rework **5 existing figures**, and integrate each batch into the
repository so the owner can commit and see it live.
**Status at handoff:** 52 of 130 questions done (40%), 53 figures published, the
whole pipeline built and tested end to end.

> **Language.** This brief is in English because the technical documentation it
> extends is in English. **Everything you produce for the learner — guide text,
> labels inside figures — must be in Catalan.** Delivery notes may be in either.

---

## 0. Orientation: read these, in this order

| File | Why |
|---|---|
| `docs/guies/GUIES-LOT-1.md` | The 12 original guides. **This is the spec by example.** Read it end to end. |
| `docs/guies/GUIES-LOT-4.md` | The most recent batch — closest to current standard. |
| `docs/HAND_DRAWN_GEOMETRY_TECHNIQUE.md` | The drawing model. **§1.4, §1.5, §2.3b are the hard-won parts** — each came from human review and each contradicts naive intuition. |
| `docs/guies/figures-04.html` | 20 figures as runnable source. Your working example. |
| `docs/comu.js`, `docs/hand-draw.js` | The renderer and standard library. |
| `README.md` | The project as its owner describes it, including the guide pipeline. |
| `PROJECTES-TECHNICAL-REFERENCE.md` | Why `file://` constrains every technical decision here. |

Then run, from the repository root:

```bash
python3 verifica_projecte.py
```

It must print `Tot correcte.` before you change anything. If it does not, stop
and report — you have been handed a repository in an unexpected state.

---

## 1. What this project is

A static site (no build step, no server, opens by double-clicking `index.html`
over `file://`) presenting 130 open questions transcribed from a book on
synthetic geometry, with 67 hand-drawn figures scanned from the source PDF.

Because it must work over `file://`, **all data is loaded as global variables in
plain `<script>` tags, never via `fetch()`** — CORS would block that. This single
constraint explains most of the architecture. Do not introduce ES modules,
`fetch`, or a build step.

Two data files matter to you:

- `js/data/preguntes-dades.js` → `window.PREGUNTES`, 130 records. **Generated**
  by `build_preguntes_dades.py` from a source JSON that is *not* in the repo.
  Relevant fields: `id`, `pagina`, `enunciat.{en,ca}`, `imatge`, `dimensio`
  (`"2D"`/`"3D"`), `dificultat` (1/2/3).
- `js/data/guies-dades.js` → `window.GUIES`, currently 52 records. **Generated**
  by `parse_guies.py` from the markdown in `docs/guies/`.

**Never hand-edit either file.** Edit the markdown, regenerate.

---

## 2. The learner — why the guides are shaped the way they are

**Profile.** ~14 years old, mathematically interested, capable of reasoning,
fluent at solving equations and computing. **Has never attempted synthetic
geometry.** The parent is a mathematics graduate and reads everything you write.

The gap is not missing theorems. It is three specific deficits, and every design
rule below traces to one of them:

1. **No known output format.** In algebra there is a ritual — manipulate until
   `x = …` — and a signal that you have finished. "Why does a triangle occupy
   half its box?" has neither. The student does not know what a finished answer
   looks like.
2. **The figure is read as an illustration, not a workspace.** The central move
   of synthetic geometry — *adding a line that was not there* — has no analogue
   anywhere in school algebra.
3. **The book has no answers.** Alone with 130 questions and zero feedback, the
   student disengages by the third one.

### 2.1 The hint ladder — four levels that differ in *kind*, not amount

This is the core invention and the thing most easily got wrong. The levels are
**not** "a bit of the answer / more / all of it". A stuck student usually needs a
*different kind* of help, not *more* help.

| Level | Name | What it does |
|---|---|---|
| 0 | `encàrrec` | Reformulates the task. What must you produce? Often: "the result is a reason, not a number." |
| 1 | `concreta` | Makes it concrete — particularise, try numbers, solve the easy case first. **Deliberately plays to the student's arithmetic strength.** |
| 2 | `figura` | The construction, as an image. Zero words, or at most three. |
| 3 | `tanca` | Names what to look at, without stating the conclusion. |

Then, always:

- **`comprovació`** — a numeric prediction the student checks their *own* answer
  against. **Never the solution.** This solves the no-answers problem without
  destroying the discovery, and it uses arithmetic, where the student is strong.
  Where numbers do not apply it becomes a self-audit instead — see q95: "point to
  where your proof uses the hypothesis; if it never does, you have a hole."
- **`i després`** — where this move reappears later in the book, or how it
  generalises. Without this they are exercises; with it, mathematics.

**Hard rule: no level gives the solution.** If you find yourself writing the
answer at level 3, your level-2 figure was doing too little.

### 2.2 The move vocabulary

Each guide teaches exactly **one named move**. Nineteen exist so far:

```
redueix-al-conegut     dues-maneres          contraexemple
un-altre-pla           simetria-i-demostra   invariant
informacio-no-usada    separa-i-reorienta    identitat-com-a-figura
reflexio               construeix-per-definir desenrotlla
audita-la-demostracio  linia-no-enunciada    definicio-i-absurd
distingeix-casos       dilatacio             cas-limit
centre-per-simetria
```

The slug in `docs/manifest-figures.tsv` is the canonical value; the prose title
in the guide markdown is what gets displayed. Add a move only when a question
genuinely needs one none of these covers, and **say so explicitly in your
delivery note** — vocabulary drift is the main way this project degrades quietly.
Likely additions for what remains: `recompte-o-induccio`, `exhauriment`,
`coordenades`, `dualitat`.

This field is a filter axis: `js/ui/llista.js` filters generically
(`pregunta[clau] === valor`), so `#moviment=reflexio` already works with no code
change, exactly as `#dimensio=2D` does.

---

## 3. The visual model

### 3.1 The two-colour convention — this carries meaning

```js
const SANG = '#b0453a';   // sanguine: what the STUDENT adds
const INK  = '#1a1a1a';   // ink: the book's figure
const PAPER= '#faf6ec';   // working background (see §5.3 — published as white)
```

**Never draw an auxiliary construction in black.** The visual distinction *is*
the conceptual distinction the guides exist to teach: the book's figure is a
statement, the line you add is your decision. It also solves a practical problem
— several book figures already use black dashed strokes (q16), so the annotation
layer needs its own register.

Note: `css/tokens.css` says the site palette deliberately avoids "any tone near
terracotta." Sanguine is near terracotta. The rule is honoured where it was
written — sanguine appears **only inside the PNGs**, never as a UI colour. Keep
it that way.

### 3.2 Redrawn, not annotated

Figures **redraw** the book's figure with `hand-draw.js` and add sanguine, rather
than overlaying on the scan. Keep doing this: it gives coordinate control, free
scaling, and sidesteps the inverted-scan problem on q42.

**Always `view` the original scan in `assets/img/` first** and match its
configuration — which vertex is the right angle, which point is marked, how the
object is oriented. This catches real content: q41's book figure marks the
circle's centre and never uses it, and that observation became the whole of its
Pista 1.

### 3.3 The rules that came from human review

Read the sections. This table is an index so you know what to look for.

| § | Rule | Symptom when violated |
|---|---|---|
| **1.4** | Contact and incidence are **exact**; metric comparisons drift. Test: *correctability* — can the draughtsman fix it mid-stroke without contradicting something already committed? | "the circles are barely tangent"; rectangles sharing a corner that do not |
| **1.5** | Straight-stroke deviation ≤1%. Arbitrary shapes must be *unmistakably* irregular. Annotation marks sized for legibility (~25 px). Incidental repeated motifs must come out regular. | "if you meant a rectangle it's too imperfect"; "the tick marks aren't visible"; "those cells are too rectangular" |
| **2.3b** | Short strokes get **no** mid-stroke correction; falloff is superlinear. | "not straight enough — it suddenly bends" |

The unifying idea, worth internalising because it lets you *predict* review
comments instead of collecting them: **the hand does not fail uniformly. It fails
exactly where the task exceeds what one committed motion can hold.** One short
stroke: perfect. A contact point you watch while drawing: perfect. Two equal
lengths at opposite ends of the page: fails. Exactly 90°: fails. Three
independently-determined lines meeting at a point: fails — and unlike tangency
*cannot* be fixed, because the endpoints are already committed.

### 3.4 Zero-mean vertex noise

Rectangles and boxes must not have exactly 90° corners: Gaussian noise, **mean 0,
σ = 1% of the figure's characteristic dimension**, seeded so it is reproducible.
`comu.js` provides `jit()` and `quad()`.

**Critical and a real bug source: once a vertex has moved, everything derived
from it must be recomputed from the actual drawn position, not the ideal one.**
In q14 the apex sits on the top edge *as drawn*, and the ½ labels sit at the
centroids of the *actual* regions.

### 3.5 Standard library (`docs/comu.js`)

```js
mk(id, w, h)                      // canvas + paper fill, returns ctx
gauss(hd)                         // N(0,1), Box-Muller on the seeded rand
jit(hd, p, scale, pct=1)          // p displaced by N(0, pct% of scale)
quad(hd, x,y,w,h, scale, opts)    // hand-drawn rectangle; returns the 4 REAL corners
onSeg(p, q, f)                    // point at fraction f along p→q
tick(hd, x0,y0, x1,y1, col)       // equal-length mark
angleMark(hd, vx,vy, ax,ay, bx,by, r, n, col)   // n arcs = equality class n
rightAngle(hd, vx,vy, ux,uy, wx,wy, s, col)
lbl(ctx, t, x, y, col, size, style)             // baseline-anchored
lblC(ctx, t, cx, cy, col, size)                 // CENTRED — use inside regions
```

From `docs/hand-draw.js`:

```js
handSegment(x0,y0,x1,y1, {lineWidth, wobble, dashed, dashPattern, passes, overshoot, color})
handDot(x, y, r, color)
handEllipse(cx,cy,rx,ry, {startAngle, endAngle, lineWidth, irregularity, color,
                          pinAngles: [...], pinSigma: 0.30})
```

`pinAngles` is the §1.4 mechanism: directions where the radius must equal its
nominal value. See the q22 figure (`fig-009`) for the worked case of four
mutually tangent circles in a square.

**Do not rewrite `hand-draw.js` "equivalently."** All drawing draws from one
seeded `mulberry32` stream; any change to the number or order of `rand()` calls
shifts the stream and changes every figure. If a review comment forces a genuine
rule change, expect downstream figures to change, re-view them, and record the
rule in the technique document.

### 3.6 Notation the learner has never seen

One arc = "these angles are equal **to each other**." Two arcs = a **different**
equality class. Four marked angles are usually equal *in pairs*, not all four.
Same for tick marks. `GUIES-LOT-1.md` opens with a legend table explaining this —
**keep that table at the top of every guide document you produce**, and add a
one-line reminder in any guide whose figure uses two classes.

---

## 4. The defect to avoid above all others

Human review of lot 4 rejected five figures for **one shared reason**: the figure
depicts the *object* and omits the *construction*.

- `fig-045` (q89, Steiner–Lehmus) — drew **one** angle bisector. The theorem is
  about **two equal** bisectors; with one you cannot even state the hypothesis.
- `fig-050` (q60, Cavalieri) — cone in hemisphere with **no cutting plane**,
  which is the entire idea. A floating "R" labels nothing.
- `fig-052` (q08b, five regular polyhedra) — drew **two** solids, no vertex-angle
  marking, despite the manifest promising "angle al vèrtex < 360°".
- `fig-048` (q05, star polygons) — two stars in ink with a negligible sanguine
  arc; effectively no annotation layer.
- `fig-028` (q52, hexagonal cross-section) — **the mathematics is correct**; the
  six edge midpoints check out. The chosen projection flattens the hexagon to
  aspect ratio 0.25, so a figure whose only job is to say "this is a hexagon"
  does not show a hexagon.

**The test, applied before any figure ships: cover the sanguine. If the figure is
still equally informative, there is no hint in it.**

And from `fig-028`, a rule to add to the technique document as you work: **in a
figure of three-dimensional space, the viewing direction is part of the content,
not of the style.** Choose the projection so the property being demonstrated is
visible, then check it by looking.

---

## 5. Production workflow

### 5.1 Per figure

1. `view` the original scan in `assets/img/` (if the question has one).
2. Decide the move, then the ladder, **then** the figure. Designing the figure
   first produces decorative figures.
3. Write the drawing code in `docs/guies/figures-NN.html`, which loads
   `../hand-draw.js` then `../comu.js` then your figure block.
4. Render: `node docs/render.js docs/guies/figures-NN.html ./sortida`
   It discovers every `<canvas>` and writes one PNG per canvas id. It warns if a
   canvas has no id, and if the page produced no canvases at all — which is the
   signature of the `</script>` insertion bug in §8.
5. **`view` the rendered PNG yourself.** "No JS errors" is not verification.
   Every defect human review caught was visible in the image. Budget 2–3
   iterations per figure; that is normal, not failure.
6. Run the checklist (§7).

### 5.2 Numbering

- Figures are `fig-NNN.png`, zero-padded, **globally sequential**. 001–053 are
  taken. Your first new figure is **054**.
- **A number is permanent.** If a figure is reworked after review it keeps its
  number and increments `rev` in the manifest. Never renumber, never reuse.
- The number is stamped into the canvas margin — small (~18 px), grey
  (`#8a8580`), bottom-left, outside the drawing. It is a review marker so the
  human can refer to "figure 61" instead of counting rows in a contact sheet.

### 5.3 Publishing figures (do not skip)

The working PNG is **not** what ships. Two automatic transforms, both required:

1. **Erase the production number.** It is a review artefact; a student seeing
   "054" learns nothing. **Erase by colour, not by region** — 8 of the first 53
   figures have real geometry in that same corner. The stamp is the only mid-grey
   element (luminance 95–235, chroma < 26); ink is near-black, sanguine is
   chromatic.
2. **Convert the cream background to pure white.** `mix-blend-mode: multiply`
   makes white vanish over the page's cream; cream over cream produces a visibly
   darker rectangle. The book scans arrive white, which is why they never needed
   this.

Both are implemented at the end of `parse_guies.py`'s companion step — reuse that
code rather than rewriting it, and verify afterwards that no stamp pixels remain
and that geometry in the corner survived.

---

## 6. Delivery protocol

The owner reviews by **referring to a figure number**. Everything here exists to
make that possible.

### 6.1 Batch sizes and the human loop

Do **not** generate 78 guides and then ask for review. Every batch so far changed
either the renderer or the design rules; applying that retroactively to 78 guides
would cost far more than learning it at 18.

| Delivery | Size | Purpose |
|---|---|---|
| 5 | **rework only** — the 5 rejected figures | Prove you absorbed §4 before producing anything new |
| 6–9 | 18–22 each | Cruise |

If a delivery draws more than ~3 corrections, drop the next one to 12.

**Propose the question list and wait for approval before drawing.** This has been
the standing practice since lot 2 and it is not optional. Question selection is
the highest-leverage decision in a batch and the cheapest to correct, and **the
owner has the book and you do not** — whether a question is reachable depends on
what the text established on preceding pages, which is exactly what the
difficulty axis flags as uncertain (see `CANVI F` in `build_preguntes_dades.py`).

For each proposed question give: id, page, `dimensio`, `dificultat`, the move you
intend to teach, whether it depends on an earlier move, and one line on what the
level-2 figure would show. **Flag any where you suspect the recorded `dificultat`
is wrong** — that feedback is wanted, and two such flags from lot 2 (q42, q86)
are still open.

### 6.2 Artefacts per delivery

```
docs/guies/
  GUIES-LOT-NN.md        the guides
  NOTA-LOT-NN.md         the delivery note
  figures-NN.html        runnable source that regenerates this batch
docs/manifest-figures.tsv   appended to, never rewritten
assets/img/pistes/          the published PNGs
js/data/guies-dades.js      regenerated
```

Plus a contact sheet for review — all this batch's figures stacked in guide
order, **with the numbers still on them**. Keep it under 8000 px tall or split
it; taller images cannot be viewed in one piece.

### 6.3 The delivery note

Short and specific:

1. **What is in it** — figure range, question ids, moves used.
2. **New moves added**, with justification.
3. **What you were unsure about, by figure number.** *This is the most valuable
   part of the delivery.* Lot 2's note is the model — it flagged an assumption
   about q42 that the book text could settle, and it was right to.
4. **Rules applied that came from previous review**, so the owner can see the
   feedback landed.
5. **Anything in the source scan you could not resolve.**

### 6.4 Recording feedback so it accumulates

Maintain `docs/guies/REVISIONS.md`, append-only:

```markdown
## Lot 5 — revisió humana 2026-08-20
- fig-045: encara no es veuen les DUES bisectrius
  → causa: es va dibuixar la bisectriu de B però no la de C
  → aplicat a fig-045 rev2
```

**When a comment reveals a rule rather than a one-off slip, amend
`docs/HAND_DRAWN_GEOMETRY_TECHNIQUE.md` itself.** §1.4, §1.5 and §2.3b all
arrived that way. A comment fixed only in one figure will be re-earned twenty
times.

---

## 7. Checklist before any figure ships

**Rendering**
- [ ] Have you actually `view`ed the PNG? (Not "no errors" — looked at it.)
- [ ] **Cover the sanguine — is the figure still equally informative? Then there is no hint in it.**
- [ ] Every tangency and incidence exact (`pinAngles`; shared vertices genuinely shared).
- [ ] Long segments bow ≤1%; segments carrying a tangency have reduced `wobble`.
- [ ] Short segments perfectly straight — no mid-stroke kink.
- [ ] Tick marks ~25 px end to end; angle arcs legible.
- [ ] Rectangles have σ=1% vertex noise, and derived points recomputed from the real corners.
- [ ] Incidental grids or repeated motifs come out regular.
- [ ] Shapes meant to be arbitrary are unmistakably irregular (no angle within 20° of 90°, no side within 15° of an axis).
- [ ] **3D only: does the projection actually show the property being demonstrated?**
- [ ] Labels centred inside their regions.
- [ ] Sanguine only for what the student adds.
- [ ] Production number present, grey, in the margin — and stripped in the published copy.
- [ ] Nothing clipped by the canvas edge.

**Pedagogy**
- [ ] Exactly one named move from the vocabulary.
- [ ] The four levels differ in kind, not amount.
- [ ] Level 1 uses arithmetic or algebra.
- [ ] The level-2 figure carries ≤3 words.
- [ ] No level states the solution.
- [ ] `comprovació` is checkable and is not the answer.
- [ ] `i després` points somewhere real in the book.
- [ ] If the figure uses two equality classes, the guide reminds the reader what that means.
- [ ] Catalan reads naturally, addresses the student as *tu*, does not condescend.
- [ ] **No `después`.** That castellanism appeared 19 times across lots 2–3. Grep for it.

---

## 8. Integration — how a batch reaches the website

```
docs/guies/GUIES-LOT-NN.md   ← you write and revise HERE
        │  python3 parse_guies.py
        ▼
js/data/guies-dades.js       ← generated; never hand-edit
```

`parse_guies.py` normalises two historical divergences (the `después`
castellanism, and lot 4's descriptive figure filenames) and **fails loudly** on
anything it cannot normalise. It validates: 4 hints per guide at levels 0–3, a
`moviment`, a `comprovació`, an `i després`, and at least one figure. It must
report `problemes: 0`.

Then:

```bash
python3 verifica_projecte.py     # must print "Tot correcte."
```

This checks file presence, the 130/88-42/28-70-32 data invariants, guide↔question
integrity, figure↔manifest agreement, `fig-NNN.png` naming, script order in
`index.html`, i18n parity across both languages, and absence of the castellanism.

**Then test over `file://` as the owner will open it**, with Playwright (at
`/home/claude/.npm-global/lib/node_modules/playwright`): navigate to
`index.html#<id>` for every question with a guide, click the reveal button four
times, and assert 4 steps appear, no image is broken (`naturalWidth > 0`), and
the footer becomes visible. The existing 52 all pass; your batch must too.

Nothing else needs wiring. `js/nucli/guies.js` joins guides to questions by id at
runtime, `js/ui/detall.js` renders the ladder, `js/ui/llista.js` shows the ◆
badge. New guides appear automatically.

**Why guides live in a separate file from questions:** `build_preguntes_dades.py`
regenerates `preguntes-dades.js` wholesale and **overwrites clean**. Guides are
tens of thousands of hand-written, human-reviewed characters; putting them in the
question records would guarantee their eventual destruction. See `CANVI G` in
that script.

---

## 9. Roadmap — the 78 remaining questions

Grouped by the book's own thematic bands. Difficulty notation: `2D2` = plane,
difficulty 2. **These groupings are a starting point for your proposal, not an
instruction** — propose and get approval (§6.1).

### Delivery 5 — rework only (no new questions)

`fig-028` `fig-045` `fig-048` `fig-050` `fig-052`. Same numbers, `rev` 1. See §4.
This is deliberately small: it is a calibration gate. Do not bundle new work with
it.

### Delivery 6 — plane foundations, pp. 25–58 (16 questions)

```
q03/2D3  q04/2D1  q07/2D2  q17/2D3  q18a/3D1 q19/2D1  q20/2D1  q21/2D2
q24/2D2  q27_implicit/2D2  q30/2D2  q31/2D2  q32/2D3  q33/2D2  q35/2D2
q40_implicit/2D2
```

Closest in spirit to lot 1, and mostly easy — a good place to rebuild momentum.
Two notes: `q27_implicit` and `q40_implicit` have **no verbal statement**, only an
image ("Some geometry problems speak for themselves"). They may be the best entry
points in the whole book — no formal statement to decode, just a drawing that
asks something — and they need a different Pista 0 that says what the picture is
asking. `q32` is the golden ratio and pairs naturally with `q38`, already done.

### Delivery 7 — circles, solids, volumes, pp. 65–103 (14 questions)

```
q43/2D3  q48/3D3  q50/3D2  q57/3D3  q58/3D3  q59/3D2  q61/3D2  q62/3D3
q63/3D1  q64/2D2  q65/3D3  q66/3D2  q67/3D2  q68/3D2
```

Heavily 3D and heavily difficulty 3 — the hardest band. Every 3D guide must open
by warning that **right angles do not look right in a perspective drawing**; see
q25's Pista 0 for wording that worked. `q65`–`q68` are the Pappus cluster and
should be consecutive: q65 and q67 are about *defining* the centroid so that
Pappus works, q66 and q68 are applications.

### Delivery 8 — triangle centres and trigonometry, pp. 103–132 (15 questions)

```
q69/2D2  q72/2D2  q74/2D1  q75/2D2  q77/2D2  q78/2D1  q79/2D3  q81/3D3
q82/3D3  q83/2D1  q84/2D1  q85/2D3  q87/2D2  q88/2D2  q90/2D3
```

Trigonometry enters here. `q90` is Brahmagupta's formula — genuinely hard, and
worth pairing in its `i després` with `q89` (Steiner–Lehmus), already done.

### Delivery 9 — projection and conics, pp. 138–175 (17 questions)

```
q91/3D2  q92/3D2  q93/3D2  q94/2D1  q99/2D3  q100/3D2 q101/3D3 q102/3D2
q103/3D2 q104/3D2 q105/3D1 q106/3D3 q107/3D3 q108/3D1 q109/3D3 q110/2D2
q111/2D2
```

The most tightly interdependent band in the book: `q101`–`q106` build cross-ratio
and points at infinity cumulatively, and `q109` (Dandelin spheres) depends on
`q107`. Guide order here should follow the book's order closely — this is the one
place where departing from it will break the argument. Note `q94` is classified
2D and `q109` 3D although they concern the same ellipse; that distinction is
deliberate (see `CANVI F`) and the guides should not contradict it.

### Delivery 10 — curves, pp. 177–193 (17 questions)

```
q112/2D2 q113/2D2 q114/2D2 q115/2D2 q116/2D3 q117/2D1 q118/2D3 q119/2D3
q120/2D2 q121/2D3 q122/2D1 q123/3D3 q124/2D3 q125/2D1 q126/3D2 q127/2D3
```

The end of the book, and mostly 2D. `q121` is Archimedes' quadrature of the
parabola — exhaustion, and a candidate for a new move. `q123` (helix) and `q127`
(the sliding ladder tracing an astroid) both need a genuinely new idea and will
be among the hardest to write well.

**Totals check:** 16 + 14 + 15 + 17 + 16 = 78. Verified against the data: these
five lists contain every question without a guide, exactly once each.

---

## 10. Pitfalls actually hit

- **`replace(..., 1)` on `</script>`** once inserted a whole code block inside
  `<script src="hand-draw.js">`, where it silently never ran — and the page error
  listener reported nothing. Anchor on unique strings and verify the file after.
- **Alphabetical `glob` order** for a contact sheet made the human's "row 5" and
  the agent's "row 5" different figures. Contact sheets go in guide order; the
  stamped number makes it moot anyway.
- **A canvas too small** silently clips the last panel. Compute the extent.
- **Designing the figure before the ladder** produces a picture that gives away
  what level 3 was supposed to make the student find.
- **Assuming the source scan matches your mental image.** `view` it.
- **Erasing the stamp by region** destroys geometry in 8 of 53 figures. By colour.
- **A trailing space in a directory name** (`assets/img/pistes `) shipped once in
  a commit; it breaks on Windows. `verifica_projecte.py` now catches it.

---

## 11. Definition of done, for the whole task

- 130 of 130 questions have a guide.
- `python3 parse_guies.py` reports `problemes: 0`.
- `python3 verifica_projecte.py` reports `Tot correcte.`
- A Playwright pass over all 130 shows 4 steps, no broken images, footer revealed.
- `docs/manifest-figures.tsv` has one row per figure, no gaps, no reused numbers.
- `README.md` reflects the final count and no longer says "52 of 130".
- Every human review comment is recorded in `docs/guies/REVISIONS.md`, and every
  one that revealed a *rule* has been written into the technique document.
