# HANDOFF — Mathematical correctness review of the *geom* question bank

**Written:** 2026-08-26, at the end of tram 11.
**Audience:** a Claude instance starting cold, with this repository and no
memory of the preceding conversation.
**Language note:** this handoff is in English. **Everything you write into the
project must be in Catalan** — the project, its audience and all its content
are Catalan.

---

## 1. The job in one paragraph

*geom* is a static site built around 130 geometry questions taken from a book
(Cook, *Geometry Problems*, pp. 1–193). Each question has a **statement**, a
four-level **hint guide**, and (for 115 of them) a **worked solution**. The
task is to verify the **mathematical correctness** of all three parts of all
130 questions, and to fix what is wrong.

The audience is **15-year-olds** (4t d'ESO / 1r de batxillerat in Catalonia).
The owner is a mathematics graduate and a secondary-school teacher. He wants
explanations that are simple but **rigorous and, above all, correct**. This is
not a university text: do not reach for machinery the audience doesn't have,
but never paper over a gap either — and when the notebook's own scope stops
short of a proof, say so explicitly rather than bluffing. The project already
does this well in places (see q64, q70, q62) and that register is the one to
match.

**Progress: q01–q83 are done (trams 1–11). q84–q130 remain — 47 questions,
roughly 9 more trams of 5.**

---

## 2. Repository architecture — the part that matters

Three data files, three *different* orders, and one rule you must not break.

| File | Holds | Order | Edit it? |
|---|---|---|---|
| `js/data/preguntes-dades.js` | the 130 statements (`window.PREGUNTES`) | book order — never changes | by hand, rarely |
| `js/data/guies-dades.js` | the 130 hint guides (`window.GUIES`) | generation order | **NEVER by hand** |
| `js/data/ordre-preguntes.js` | presentation order only | grouped by difficulty then dimension | by hand |

### The rule

`js/data/guies-dades.js` is **generated**. The source of truth for every hint,
check and "i després" is `docs/guies/GUIES-LOT-N.md` (ten lot files). The
workflow is always:

```
edit docs/guies/GUIES-LOT-N.md   →   python3 parse_guies.py   →   guies-dades.js
```

`parse_guies.py` must report `130 guies, 0 problemes`. If you edit
`guies-dades.js` directly, your change is destroyed the next time anyone
regenerates.

Solutions are plain files, edited directly: `solucions/qNN.html`.

### Where a given guide lives

| Lot | Questions |
|---|---|
| 1 | q14 q15 q41 q09 q16 q22 q95 q34 q08c q36 q96 q25 |
| 2 | q13 q42 q86 q23 q10 q97 q98 q45 |
| 3 | q26 q28 q44 q46 q47 q49 q52 q56 q51 q53 q54 q55 |
| 4 | q01 q02 q70 q29 q06 q11 q12 q73 q38 q76 q80 q89 q37 q39 q05 q18b q60 q08a q08b q71 |
| 6 | q04 q18a q19 q20 q27_implicit q40_implicit q31 q32 q33 q07 q17 q21 q24 q30 q35 q03 |
| 7 | q43 q59 q62 q63 q48 q50 q57 q58 q61 q64 q65 q67 q66 q68 |
| 8 | q74 q69 q78 q83 q84 q75 q77 q87 q79 q88 q72 q85 q81 q82 q90 |
| 9 | q91 q92 q93 q94 q99 q100 q101 q102 q103 q104 q105 q106 q107 q108 q109 q110 q111 |
| 10 | q112 q114 q113 q115 q116 q117 q118 q119 q120 q121 q122 q123 q126 q124 q125 q127 |

(There is no lot 5; that is not an error.)

**Remaining work is almost entirely in lots 8, 9 and 10.**

---

## 3. The working method, tram by tram

This is what produced the results so far. Follow it.

### 3.1 Read

```bash
python3 docs/revisio-matematica/extreu-per-revisar.py q84 q85 q86 q87 q88
```

This flattens statement + guide + solution into one text per question. **Read
all three together.** A large fraction of the errors found so far were a guide
and its own solution contradicting each other (q05/q07, q33, q37, q57, q60,
q69, q83) — invisible if you read them separately.

Five questions per tram is the right size. Some trams justify fewer (tram 4
stopped at q45 because q40 alone took the budget); say so rather than rushing.

**Read the itinerary map before you edit a `DEPÈN` line.** Two traps, both
cheap to avoid and expensive to discover with the verifier in red:

- If a `DEPÈN` names a question in a **different** itinerary, `verifica_projecte.py`
  raises an **error** (not a warning) unless that question is also in the
  entry's `requereix` in `itineraris-tematics-dades.js`.
- If it names a **hidden** question you simply swap one warning for another.
  In tram 12, q85 needed q78 (different itinerary → would have needed a
  `requereix` edit) and q84 (hidden → would have replaced the `q85 → q88`
  warning with `q85 → q84`). Citing q31/q33 was both correct mathematically
  and free.

**The `DEPÈN` text never reaches the student.** `parse_guies.py` keeps only
the `**Moviment: …**` title; everything after it on that line is discarded.
So the three `(aquest mateix lot)` strings inside `DEPÈN` lines in
`GUIES-LOT-8.md` are *not* a regression of the §5 production-vocabulary
sweep — `grep -c "aquest mateix lot" js/data/guies-dades.js` returns 0. Don't
spend a tram chasing them.

### 3.2 Verify numerically, don't eyeball

Every numeric claim gets checked with Python. This is not optional and it is
where a lot of the errors were caught:

- q53's oblique-cylinder surface (the stated 150.8 is `perimeter × generatrix`,
  an upper bound; the true value is 138.5 — needs an elliptic integral)
- q75's "two triangles" (it's an infinite family; found by solving the cubic
  for a varying second symmetric function)
- q40's panel 2 (reconstructed by **measuring the scanned PNG pixel by pixel**)
- q81's dihedral angles, q31's pentagon angles, q73's midpoint family

**Open the images.** `assets/img/` holds the book scans; `assets/img/pistes/`
holds the generated hint figures. Several findings came only from looking:
q05's `_notaExtraccio` said "7-pointed star" and the figure has 8; q40's
"unresolvable detail" turned out to be resolvable.

### 3.2b Measure the figure when the picture and the text disagree

Extends what was done at q40. In tram 12 the q86 hint says "put the compass
point at **B**" and the arc in `fig-202.png` looks like it starts at A. It
does not, and reporting it would have been a false positive. The procedure:

1. Mask the red channel (`r>110 && r−g>50 && r−b>50`) and the black.
2. **Least-squares circle fit** on the red pixels (x²+y²+Dx+Ey+F=0). Result:
   centre (360,348), radius 256, mean residual 0.93 px — the centre is B.
3. Line-fit each black ray, excluding the bounding boxes of the text labels.
4. Take red pixels within 2.5 px of the upper ray, cluster them by proximity,
   and **count the crossings**.

Step 4 is the one that matters and the one q40 didn't do: the claim under test
is usually *how many* intersections there are, not where they are. Here: two,
at 40 px and 383 px from A, with the angle at A measuring 41.4°. The figure is
correct.

### 3.3 Edit surgically

Use exact-match string replacement with an assertion that the match count is
exactly 1, so a silent mis-edit is impossible:

```python
def rep(path, old, new, label):
    s = io.open(path, encoding='utf-8').read()
    if s.count(old) != 1:
        print('!! %s: %d matches' % (label, s.count(old))); sys.exit(1)
    io.open(path,'w',encoding='utf-8').write(s.replace(old, new))
```

Always `grep -o` the **raw** file for the exact string first: the flattened
text from the extractor has had its HTML stripped, and `.md` files are hard
wrapped, so a string that reads fine in the extract will not match on disk.

### 3.4 Verify and ship

```bash
python3 parse_guies.py          # must say: 130 guies, 0 problemes
python3 verifica_projecte.py    # must end: Tot correcte.
```

`verifica_projecte.py` currently reports **53 checks, 0 errors, 2 intentional
warnings** (see §6). Then produce:

1. a ZIP containing **only the files touched in this tram**, preserving
   directory structure — the owner asked for this explicitly and applies each
   tram on top of the previous state;
2. a changelog inside it, in Catalan, named for the tram, following the
   format of the eleven already in `docs/revisio-matematica/`.

Note that `js/data/guies-dades.js` is cumulative by nature — it will appear in
every tram's ZIP. Say so in the changelog.

### 3.5 Report

In chat: lead with the **most serious finding**, explain why it matters
pedagogically (not just that it's wrong), and keep it short. The owner is a
maths teacher — he wants the mathematical substance, not a process report. Do
not list everything that was fine; a one-line "verified and correct" for the
clean questions is enough.

---

## 4. Taxonomy of recurring errors — read this before starting

This is the highest-value part of this handoff, because it is pure accumulated
pattern-matching that you cannot reconstruct from the files. **These are the
things that actually go wrong in this project, ranked by how often.**

### 4.1 The conclusion is right, the argument doesn't reach it
The single most common failure. The answer stated is correct, so nothing looks
wrong, but the reasoning given doesn't produce it.
> **q16** — Varignon area: "decompose one half into ¼+¾, apply twice". That
> never yields ½. The real argument needs *both* diagonals, counting the four
> corner triangles in two pairs.
> **q01** — concurrency of medians was *assumed* via "a unique global centre of
> symmetry", not proved. The guide's own hint 3 had the correct reflection
> argument; the solution didn't use it.

### 4.2 Circular arguments
> **q26** — invoked SSS on the two halves created by *the altitude*, listing
> only two pairs of equal sides; the third pair (the two half-bases) is exactly
> what's being proved. Must start from the **median**.
> **q65** — defined the centroid as "the point that makes Pappus work", which
> defines no point at all and makes the theorem true by decree — while the
> question explicitly asks *whether* it can be made to hold.

### 4.3 Algebra announced and not performed
> "Fes la resta i simplifica", then the answer appears in the summary.
> Found in **q48** (the frustum formula was never given), **q49**, **q52**,
> **q59**, **q62**, **q66**. In a solutions file for teachers this is a real
> gap, especially on difficulty-3 questions where the algebra *is* the content.

### 4.4 Guide and solution contradict each other
Always check them against each other.
> **q05** vs **q07** (turns of a star polygon: 1 vs 2 — q07 was right);
> **q33** (36-36-108 vs 72-72-36 — the solution was right);
> **q37** (two rectangles vs one — the solution was right);
> **q57**, **q60**, **q69**, **q83**.

### 4.5 False or misdirected cross-references

Two variants, with different costs to detect.

**(a) The wrong question is named.**
> **q44** cited a result to q23 that q23 never establishes.
> **q77** cited q32 for "the diagonal of a pentagon"; q32 computes the *side of
> the small pentagon* — the diagonal is q33.
> **q24** cited q14 for Pythagoras; q14 is about a triangle being half its box.
> **q59**/**q61** claimed π/6 and 2/3 were "the same fraction" and then
> "complementary". They are neither.
> **q86** cited "the SAS case of q08c-reversed"; q08c is about AAA and
> similarity and has no SAS content at all (found tram 12).
> **q84**'s `DEPÈN` cited q14/q25 for Pythagoras. q14 is the half-the-box
> question, q25 is the 3D box diagonal; **no question in the notebook proves
> Pythagoras** — it is prior knowledge. Same residue as the q24 case above
> (found tram 12).

**(b) The right question is named, but it proves something narrower than the
use.** More expensive to spot, because the citation looks resolved. The check:
for every named result a guide cites, open the source question and write down
its **hypothesis**, not its name.
> **q79** proves the law of cosines *for an obtuse angle only*
> (c² = a²+b²+2ab·cos C'). Four places used it on an **acute** angle:
> **q86** (30°), **q88** (its own worked example is 2θ=74°),
> `solucions/q81.html` (the tetrahedron's arccos(1/3) ≈ 70.53°) and
> `solucions/q90.html`. q81 had been passed as verified in tram 11 precisely
> because the citation pointed at the right question. Closed in tram 12 by
> adding the acute case to q79 itself (see §5).

### 4.6 The recipe is narrower than the claim
> **q81** — "the same method works for the other three solids". The specific
> construction (edge midpoint → opposite vertex) is perpendicular to the edge
> only for *equilateral triangular* faces.
> **q29** — the fan triangulation needs **convexity**, which wasn't stated.

### 4.7 Wrong side of a boundary / degenerate case ignored
> **q13** — "the two halves no longer make 21 each". They always do; and this
> contradicted q15, which is the question about exactly that.
> **q30** — the diagonal count included the *side* as a diagonal.
> **q70** — "each diagonal adds one triangle to the **two** already there"
> gives n−1, and the same sentence concludes n−2.
> **q83** — placed the 60° angle at the vertex the cut was made from, where it
> is 30°. A student following it gets sin 60° = 1/2.

### 4.8 A claim that is simply false
> **q03** — "with triangles you can join 3, 4, 5 or 6 at a vertex" (that's the
> *polyhedron* condition, <360°, not the tiling condition, =360°); and "no
> combination with polygons of 7+ sides sums to exactly 360°" (3·7·42 does).
> **q82** — implied no single regular polyhedron fills space. The **cube** does.
> **q24** — "a formula that generates them all"; it generates all *primitive*
> triples. (9,12,15) is not obtainable.
> **q21** — claimed infinite descent *needs* the coprimality hypothesis. It's
> the opposite; that's the point of descent.

**Claims of the form "X is the only one that …" need three checks, not one:**
that X belongs to the set, that nothing else fails, and that X fails *always*.
> **q86** — "of the five classic congruence criteria, SSA is the only one
> that fails" failed all three at once: SSA is not a criterion, AAA fails too
> (it fixes shape, not size), and SSA **does** determine the triangle when the
> given angle is right or obtuse. The third is the one that hurts a student,
> who may pick their own numbers, get a single answer and think they erred.

### 4.9 Answers that stop short of the question asked
> **q50** — "can you figure out the pattern?" was answered with the limit, not
> the pattern. The pattern is exact: Vₙ = πr²h·(1/3 − 1/(2n) + 1/(6n²)).
> **q81** — asks about five polyhedra, answered two.
> **q82** — asks for other tilings, gave none.
> **q62** — asks for volume *and* surface; only the volume is derived, and
> 2πRh appeared with no flag that it's given rather than proved.

### 4.10 Terminology that will collide with the Catalan classroom
> **q77** — the book's *dilation* was rendered "dilatació", a false friend. In
> Catalan the transformation is **homotècia**; the technique is **semblança**.
> **q57** — "apotema" used for a polyhedron's inradius, a different sense from
> the polygon apothem of q39, with a third sense (a pyramid's slant height)
> waiting to confuse.

---

### 4.11 The argument returns to where it started

A valid chain whose final value equals one of its own intermediate values,
because of a symmetry nobody names. Not 4.1 (the argument *does* reach the
conclusion) and not 4.2 (no step assumes what it proves). It is still worth
fixing, because it hides from the student that the figure already contained
the answer — which in a geometry notebook is the thing being taught.
> **q85** — travelled 18° → 36° → 72° with two applications of the double-angle
> formula to land on cos72° = 1/(2φ), which is the value of sin18° read off the
> figure in step one. 18° and 72° are complementary, so q78 makes the return
> inevitable. Fixed by taking the short route in the guide and keeping the long
> one in the solution *as the lesson*, under a step titled "why the double-angle
> route adds nothing".

**Detection:** at the end of any chained derivation, evaluate every
intermediate numerically and check whether one equals the final value. If it
does, find the symmetry (complementary, supplementary, similarity, symmetry of
the figure) that makes it inevitable.

## 5. Cross-cutting sweeps — all closed, keep them closed

| Sweep | Status |
|---|---|
| Unescaped `<` inside solution text (breaks XML/validators) | **closed** — 0 remaining |
| Production vocabulary ("en aquest mateix lot", pointers to `NOTA-LOT-6.md`, `REVISIONS.md`) leaking into student-facing hints | **closed** — 0 remaining, verified against the generated `guies-dades.js` |
| Guide `DEPÈN de` vs itinerary `requereix` | **closed** — 19 added; now guarded by `verifica_projecte.py` |
| Prose that asserts presentation order ("la propera guia", "la pregunta següent") | **closed** in tram 12 — one real case, q87, which said q79 was "the next guide" when q79 is 42 positions later |
| Law of cosines cited in a form q79 doesn't prove | **closed** in tram 12 — the acute case now lives in q79's *I després*, which legitimises the citations in q81 and q90 without touching them |

If you introduce a `<` in a solution, escape it as `&lt;`. If you write a
cross-reference, don't mention lots, notes or internal files — the student sees
this text. And never let prose assert order: the order lives in
`ordre-preguntes.js` and the owner can reorder it without touching any text.

The sweep for that one, if you need to re-run it:

```bash
grep -rno "la propera guia\|la guia següent\|la següent guia\|la pregunta següent\
\|la propera pregunta\|tot seguit\|la que ve ara\|just després\|just abans" \
  docs/guies/GUIES-LOT-*.md solucions/*.html
```

**Reopening earlier trams.** If you find an error in already-reviewed material
and the correction is local and certain, **fix it** and record it in the tram
changelog under *"Reobertures de trams anteriors"*. A known-and-uncorrected
error is worse than an undiscovered one, because it survives the next review
wearing an "already checked" label. If the fix needs an owner decision or
touches a figure, report only. And before repairing *n* questions that depend
on one gap, check whether the gap can be closed once at its source — that is
what q79 did for q81 and q90.

---

## 6. Open decisions for the owner — do not decide these yourself

1. **q40 panel 1.** `NOTA-LOT-6.md` §9 records that the "unresolvable detail"
   in the scan *is* resolvable: it's a small square sitting on the top side of
   an inscribed square, corners on the arc, giving **t = S/5** and an area
   ratio of 1:25. The text was **not** changed, because it would desynchronise
   from `fig-059`, which would have to be redrawn. Awaiting the owner.
2. **q62 — proving 2πRh.** Currently marked as given-not-proved. Archimedes'
   argument is doable at this level but long and would change the guide's
   scope. Offered, not done.
3. **Presentation order.** 15 guides are presented before something they
   declare a dependency on, because `ordre-preguntes.js` groups by difficulty
   and the dependency chains cross those groups. 4 have been neutralised by
   rewriting the text (q66, q67, q69, q77); 11 remain. Fixing the rest means
   either more rewriting or moving entries — an owner call.
4. **6 within-itinerary order inversions** (warning 1 from the verifier). The
   worst is **q04 → q70**: q04 needs the (n−2)·180° sum that q70 establishes
   *sixteen positions later in the same itinerary*.
5. **5 dependencies on hidden questions** (warning 2). q50→q18a, q68→q67,
   q69→q67, q85→q88, q90→q84. The student cannot open these. Options: unhide,
   rewrite so the guide doesn't need them (done for q79 and q80), or accept.
6. **A "Byrne mode" UI feature** — an icon on each hint figure that redraws it
   in Oliver Byrne's colour logic. Assessed as technically cheap (the figures
   are canvas code, and every drawing primitive already takes a colour; only
   three constants exist: `SANG`, `INK`, `PAPER` in `docs/comu.js`), but the
   real cost is 162 per-figure semantic decisions plus rewriting hint prose to
   refer to colours. Owner said: note it and move on. Suggested pilot: **q31**,
   the one figure where Byrne's actual mechanism (coloured angle wedges as
   identifiers) does the mathematical work.
7. **The glossary.** See §7.

---

## 7. The standing side-task: prior-knowledge inventory

`docs/CONEIXEMENT-PREVI-CANDIDATS-GLOSSARI.md` catalogues everything the
guides use **without defining it and without it coming from an earlier
question** — Pythagoras, Heron, (4/3)πr³, the trigonometric ratios — checked
against the 53 terms the glossary already has.

**The owner asked for this to continue from q79 onward.** For each new tram:

1. note every concept used but not defined;
2. check it against `js/data/glossari-dades.js`;
3. file it under **A** (term exists but the entry lacks the fact that's used),
   **B** (missing entirely), or **C** (one-off, probably not glossary
   material), with the list of questions;
4. mention in that tram's changelog that the file was updated.

The file currently covers q01–q83: 7 entries in A, 23 in B, 8 in C. **It does
not modify the glossary and must not** — writing entries is a content decision
for the owner (all 53 existing terms have figures).

A method note worth keeping: section B came from reading questions one by one,
not from a text search. Concepts like "the angles of a triangle sum to 180°" or
"the midsegment theorem" are used constantly *without being named*, and no
regex finds them.

---

## 8. Verification commands

```bash
python3 parse_guies.py                              # 130 guies, 0 problemes
python3 verifica_projecte.py                        # 53 checks, 0 errors, 2 warnings
python3 docs/revisio-matematica/extreu-per-revisar.py q84 q85    # read a tram
```

The two warnings from `verifica_projecte.py` are **intentional and should
stay** until the owner decides §6.4 and §6.5. If a third warning or any error
appears, you introduced it.

---

## 9. What has been done, by the numbers

- **68 files** changed or created.
- **57 of the 130 guides** modified (via the `.md` sources, then regenerated).
- **51 solution files** rewritten in part.
- **12 tram changelogs** + 1 side-task changelog, all in
  `docs/revisio-matematica/`, each recording what was found, what was changed
  and why, and what was verified as correct without change.
- **15 questions have no solution file** and never did: q18a, q18b, q19, q20,
  q21, q24, q34, q35, q67, q83, q84, q87, q88, q102, q106. Several of them now
  have a complete and correct argument in the guide, if the owner wants them
  written.

Trams 1–11 covered q01–q83; tram 12 covered q84–q88 and reopened q79.
**q89–q130 remain.** The next hot spot is **q90**: its solution uses
p² = a²+b²−2ab·cos B (the acute case) and cos(180°−B) (the cosine of an obtuse
angle). Both are now available — the acute case from q79's *I després*, the
obtuse-cosine definition from the same place and from q87's — so q90 should be
straightforward to close.

One structural observation left undecided, sibling to §6: the three questions
that **establish** the basic trigonometry — q84 (sin²+cos²=1), q87 (sine of an
obtuse angle), q88 (double angle) — are all in `EXERCICIS_AMAGATS`. The
notebook proves them where the student cannot go and uses them where they can.
Unhiding is cheaper here than for q18a or q67: all three already have a
complete and correct guide, and two are short.

**Nothing in the original `preguntes-dades.js` statements has been changed
except three fields**, all recorded in `CANVIS-TRAM-01.md` and
`CANVIS-TRAM-02.md`: q03's Catalan statement (a translation drift), q09's
Catalan statement (the cut must be specified as the altitude, or the claim is
false), and q05's `_notaExtraccio` (said 7-pointed, the figure has 8). The
English statements are the book's and have been left untouched throughout —
including where the book itself is ambiguous (q09), which is flagged rather
than silently fixed.

---

## 10. Register — how to write for this project

Read two or three existing guides before writing any prose. The house voice is
specific and worth matching:

- **Second person, direct.** "Fixa't que…", "Compte amb…", "Prova-ho".
- **Name the trap.** The best hints say *where the student will go wrong* and
  why, not just what's true. When you fix an error, keep the corrected
  statement *and* explain the mistake it replaces, because that mistake is
  usually the natural one to make.
- **Say where an argument stops.** q70 and q64 do this beautifully ("that an
  argument doesn't reach everywhere doesn't make it a bad argument; what would
  be bad is not knowing how far it reaches"). Match that.
- **Numbers that check out.** Every "Comprovació" must be verifiable by hand
  by a 15-year-old.
- The figure convention: `INK`/"tinta" is what's given, `SANG`/"sanguina" is
  the construction or the unknown. Captions state it, and say so explicitly
  when it's deliberately inverted (q73).
