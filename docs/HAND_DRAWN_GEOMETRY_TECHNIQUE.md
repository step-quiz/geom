# Simulating Human Hand-Drawn Geometric Figures: A Technical Guide

## Purpose and audience

This document teaches an AI system (Claude, or any capable code-generation model) how
to render geometric figures — triangles, circles, ellipses, hyperbolas, cones, hexagon
tilings, pentagrams — so that they visually resemble figures **drawn by hand**, as
opposed to figures produced by Geogebra, Desmos, Mathematica, or any CAD/plotting tool.

The intended use case is generating illustrations for math textbooks, worksheets, or
diagrams where the "hand-drawn" aesthetic is a deliberate stylistic choice, often
because it reads as less intimidating or more informal than a precise vector rendering.

This is **not** a document about drawing badly. Every technique below is the result of
an iterative process, refined against real reference photographs of hand-drawn
geometric figures, correcting specific, identifiable failure modes. Skipping straight
to "add some randomness to the coordinates" produces results that look *wrong* in
specific, describable ways — this document exists to name those failure modes so they
are not repeated.

**Read this document in full before writing any drawing code.** The core insight (see
Part 1) reframes the entire problem, and code written under the naive framing (Part 2)
will need to be substantially rewritten once the reframing is understood. It is much
cheaper to read first.

---

## Part 1 — The core insight: local imperfection vs. global coherence

This is the single most important idea in this document. Get this wrong and every
figure will look subtly, unplaceably "off" no matter how much noise-tuning is applied.

### 1.1 The naive (wrong) model

The naive approach treats "looks hand-drawn" as a property of **individual strokes**:
take a mathematically perfect line, add some jitter/noise to it, and it will look
hand-drawn. Under this model, drawing a perfect equilateral triangle's three medians
means: draw each median as a perfect segment from vertex to centroid, then jitter the
path of each segment independently.

This model is wrong, and it fails in a very specific, recognizable way: **the figure
still looks computer-generated**, just with a slightly fuzzy or shaky line quality. The
reason is that it gets the *easy* part (a single line's imperfection) right while
getting the *hard* part (how multiple lines relate to each other) completely wrong —
because under this model, three medians drawn from three different vertices, each
independently jittered toward the *same exact centroid coordinate*, will still all
meet at that one point. That perfect concurrency is the tell. No human, drawing by eye
without instruments, produces three medians that meet at a single common point to
sub-pixel precision — and yet that is exactly what "jitter three lines toward the same
target coordinate" produces, because the jitter is applied to the stroke, not to the
underlying geometric claim.

### 1.2 The correct model

**Where a hand actually fails is not in drawing a single line — it is in making
multiple independent lines agree with each other when the underlying geometry demands
they must.**

A human can draw a single straight-ish line from A to B with maybe 1% deviation from
perfectly straight. That is a very achievable, almost trivial level of precision for
a steady hand. What is **not** achievable by eye is:

- Drawing three medians of a triangle that all pass through exactly one point
  (concurrency is a global property relating three independently-drawn objects; a 1%
  error in each of three lines essentially never cancels out to produce exact
  concurrency).
- Drawing a rectangle whose four angles are all *exactly* 90°.
- Drawing a circle whose curvature is *constant* at every point (i.e., a perfect
  circle) — this requires simultaneously controlling distance-from-center in every
  direction, which is a global constraint, not a local one.
- Drawing an ellipse that is *exactly* symmetric about both of its axes.

The failure mode is never "the line is shaky." The failure mode is **"the geometric
theorem that this figure is illustrating doesn't quite hold in the drawing."** Three
medians *almost* meet at a point, but not quite. Two diagonals of a rectangle *almost*
bisect each other, but not quite. A traced circle *almost* has constant curvature, but
visibly does not if you look closely at opposite sides.

### 1.3 The consequence for how you write code

This reframing has a direct, mechanical consequence: **you cannot compute a "perfect"
target coordinate and then jitter the stroke that draws toward it.** You must instead:

1. Draw the *first* elements of a figure with a small amount of position-level
   imperfection (perturb the defining points, not just the stroke).
2. Compute all *dependent* elements (midpoints, centroids, intersections, tangent
   directions) from the **actual imperfect coordinates already drawn**, never from the
   idealized theoretical coordinates.
3. When multiple independently-drawn elements are supposed to coincide (three medians
   meeting at a centroid; two diagonals bisecting each other), **do not force them to
   coincide**. Draw each one honestly from its own endpoints. The small mutual
   disagreement between them *is* the realistic imperfection — it does not need to be
   synthesized separately, and trying to synthesize it on top of already-imperfect
   geometry typically overcorrects (see Part 5.2 for a worked example of this exact
   mistake).

A rule of thumb that survived extensive testing: **~1% positional error at the level
of primitive points (vertices, angle estimates), essentially 0% forced error at the
level of derived coincidences.** Let the coincidences fail on their own; do not
sabotage them a second time.

---

## Part 2 — Stroke-level rendering: the pencil model

Once Part 1's reframing is internalized, you still need a rendering primitive for
individual strokes that itself looks hand-drawn, since even a single triangle edge or
circle needs to not look like a vector line with noise on it. This part covers that
primitive.

### 2.1 What a shaky/noisy line gets wrong

A very common first attempt is to sample many points along the ideal line and add
high-frequency sinusoidal or random perpendicular noise to each point. This produces a
"fuzzy" or "shaky" line. It is recognizably wrong for a specific reason: **a real human
hand moving at drawing speed is mechanically a low-pass filter.** It cannot change
direction at high frequency. A hand-drawn line is *overwhelmingly straight*, punctuated
by *occasional, smooth, large-radius corrections* — not a constant low-amplitude
tremor along its entire length.

Concretely: if you watch someone draw a 15cm line without a ruler, what typically
happens is they commit to a direction, draw most of the line confidently straight, then
partway through notice the line isn't tracking exactly toward the intended endpoint,
and apply one smooth, visible curvature correction to steer back on target — then
continue straight again. The result has **one or two long, gentle bends**, not a
continuous wobble.

### 2.2 The trajectory model that works

Model a stroke's deviation from the ideal straight line as the sum of two components:

**(a) A tiny, low-amplitude micro-tremor**, present along the whole stroke, using a
low-frequency sinusoid (NOT high-frequency noise) at roughly 10-15% of the amplitude
used for component (b). This exists so the line doesn't look laser-straight, but it
must stay subtle — it is set dressing, not the main effect.

**(b) One or two large, localized Gaussian-shaped corrections.** For each correction:
pick a center point somewhere in the middle 20-80% of the stroke's length (corrections
essentially never happen right at the very start or end, since that's where the hand
is anchoring, not drawing), a width covering roughly 15-35% of the stroke's total
length, and an amplitude 2-4x larger than the micro-tremor amplitude. A Gaussian
(`exp(-((i-center)/width)^2)`) is important here specifically because it has no sharp
edges or discontinuities — it fades in and out smoothly, unlike e.g. a triangular pulse.

```javascript
function handTrajectory(n, segAmp, segLen) {
  const lengthScale = Math.min(1, segLen / 500); // see 2.3 below
  const vals = new Array(n).fill(0);

  // (a) micro-tremor: low frequency, small amplitude
  const microAmp = segAmp * 0.12;
  const microPhase = rand() * Math.PI * 2;
  const microFreq = 0.25 + rand() * 0.15;
  for (let i = 0; i < n; i++) {
    vals[i] += Math.sin(i * microFreq + microPhase) * microAmp;
  }

  // (b) 1-2 large localized corrections
  const numCorrections = rand() < 0.5 ? 1 : 2;
  for (let c = 0; c < numCorrections; c++) {
    const center = n * (0.22 + rand() * 0.56);
    const width = n * (0.16 + rand() * 0.14);
    const sign = rand() > 0.5 ? 1 : -1;
    const strength = segAmp * (2.2 + rand() * 2.2) * sign * lengthScale;
    for (let i = 0; i < n; i++) {
      const d = (i - center) / width;
      vals[i] += strength * Math.exp(-d * d);
    }
  }
  return vals;
}
```

This produces exactly the "mostly straight, one visible bend" character that reads as
confident, human freehand drawing, as opposed to either a laser-straight CAD line or a
uniformly shaky one.

### 2.3 Scale the correction amplitude by segment length

A correction amplitude that looks right on a 700px triangle edge will look absurdly
exaggerated on a 150px median segment — a short segment doesn't give a hand enough
distance to "notice and correct" a directional error the same way a long one does.
Scale the correction strength by segment length relative to some reference length
(500px worked well across the tested figure sizes), clamped to 1.0 for longer
segments:

```javascript
const lengthScale = Math.min(1, segLen / 500);
```

Forgetting this step is a specific, recognizable failure: short auxiliary lines
(medians, radii, tangent-point segments) come out looking like exaggerated arcs
instead of the nearly-straight short segments a hand actually produces.

### 2.4 Multiple passes ("pencil texture") without creating a doubled line

Real hand-drawn lines, especially in thick marker or crayon (matching the reference
photographs used to build this technique), often show a slightly rough, doubled, or
textured edge — as if traced more than once. The naive way to simulate this is to draw
the same stroke 2-3 times, each with its own independent noise trajectory. **This is
wrong and produces a very specific, bad-looking artifact**: because each pass has
independent high-amplitude noise, the passes visibly diverge from each other partway
along the stroke and cross over, creating a loop or lens shape in the middle of what
should be a single line (see Part 5.1 for the visual diagnosis of this failure).

The fix: **generate ONE shared trajectory per stroke** (one call to the function in
2.2), and have all passes follow that *same* trajectory, differing from each other by
only a very small additional jitter (much smaller than the main trajectory noise) plus
a small per-pass line-width variation:

```javascript
const baseNoise = handTrajectory(steps + 1, wobble, len);
for (let p = 0; p < passes; p++) {
  const localJitterAmp = passSpread; // small! e.g. 0.6-0.8px, NOT a new large-amplitude noise
  ctx.lineWidth = lineWidth + (rand() - 0.5) * widthVariation;
  for (let i = 0; i <= steps; i++) {
    const localJ = (rand() - 0.5) * localJitterAmp;
    const x = /* base point */ + px * (baseNoise[i] + localJ);
    const y = /* base point */ + py * (baseNoise[i] + localJ);
    // ...
  }
}
```

`passSpread` should be small enough that the passes are visually inseparable except as
a slight thickening/roughening of the line — never large enough to see as two distinct
crossing curves.

### 2.5 Variable line width

Real pencil/marker strokes vary in thickness along their length and between separate
strokes. Vary `lineWidth` by a small random amount (i) once per stroke and (ii)
slightly more per pass within a multi-pass stroke. Do not vary it point-by-point within
a single pass — that produces a warped-taper look rather than a naturalistic pressure
variation.

### 2.6 Endpoint overshoot

A hand does not always lift the pen at the mathematically exact endpoint. Add a small
random overshoot (a few pixels, in either direction) past the nominal endpoint on each
stroke. This is a minor detail but is visible on close inspection of reference images,
particularly at triangle vertices.

### 2.7 Curves that are not straight lines (hyperbola branches, etc.)

For a stroke that is not a straight line but a mathematical curve (a hyperbola branch,
for example), the same trajectory model applies, but the noise must be applied
*perpendicular to the local tangent of the curve* at each sampled point, not
perpendicular to a single global direction vector (which is what works for straight
segments). Compute the local tangent by finite difference between neighboring sampled
points:

```javascript
const dx = rawPoints[i+1].x - rawPoints[i-1].x;
const dy = rawPoints[i+1].y - rawPoints[i-1].y;
const len = Math.hypot(dx, dy) || 1;
const px = -dy / len, py = dx / len; // perpendicular to local tangent
```

Everything else (shared trajectory across passes, length-scaled correction amplitude,
Gaussian corrections) carries over unchanged from the straight-segment case.

---

## Part 3 — Circles and ellipses: curvature, not noise

Circles and ellipses are the case where the local-vs-global distinction from Part 1 is
most visually important, and where the most common naive mistake produces the most
obviously wrong-looking result.

### 3.1 The naive mistake: radius noise looks like a hairy circle, not a hand-drawn one

The obvious first approach is: for each angle around the circle, add random noise to
the radius. If you do this with noise that has any meaningful frequency (i.e., the
radius perturbation changes quickly as the angle changes), the result is a circle with
a **fuzzy, "hairy" or "fluffy" outline** — every small arc segment bulges slightly in
and out independently of its neighbors. This is a very recognizable and specific
failure mode, and it looks nothing like a real hand-drawn circle.

**Diagnosis note:** this failure can appear even when your code has no explicit
high-frequency noise term, if you are not careful about *where* per-point randomness
enters the calculation. In one tested implementation, radius harmonics used
deliberately low frequencies (1-3 cycles per revolution — see 3.2), yet the rendered
circle still came out hairy. The cause was a per-point independent random decorrelation
factor between the x and y radius (intended to break perfect ellipse symmetry) that was
being redrawn fresh at every single sampled point instead of once per pass. Any
per-point call to a random number generator that affects position is a red flag — audit
for this specifically if a "low frequency, but still looks hairy" bug appears.

### 3.2 What a real hand-drawn circle's imperfection actually looks like

Look closely at a real hand-drawn circle: it does not have a fuzzy edge. It has a
smooth, single, clean line — but the *overall shape* is subtly not a perfect circle.
One side may be slightly flatter, another slightly more bulged, in a way that varies
smoothly over large arcs (a significant fraction of the circle's circumference), not
point-to-point. This is a **low-frequency, global shape deviation**, not a
high-frequency edge texture.

### 3.3 The correct technique: low-order harmonics on the radius

Represent the radius deviation as a sum of 2-3 sinusoidal harmonics with **low integer
frequencies** (1, 2, or 3 cycles per full revolution — never higher), each with a
random phase and a small amplitude (roughly 3-4.5% of the radius worked well across
tested figures):

```javascript
const harmonics = [];
const numH = 2 + Math.floor(rand() * 2); // 2 or 3
for (let h = 0; h < numH; h++) {
  harmonics.push({
    freq: 1 + h,                          // 1, 2, 3 -- LOW frequencies only
    phase: rand() * Math.PI * 2,
    amp: irregularity * (1 - h * 0.3) * (0.5 + rand())
  });
}
```

Then, when sampling the ellipse at parametric angle `t`:

```javascript
let rFactorX = 1, rFactorY = 1;
for (const h of harmonics) {
  const dev = h.amp * Math.sin(h.freq * t + h.phase);
  rFactorX += dev;
  rFactorY += dev * xyDecorrelation; // see 3.4
}
const x = cx + rx * rFactorX * Math.cos(t);
const y = cy + ry * rFactorY * Math.sin(t);
```

### 3.4 Breaking axis symmetry without introducing per-point noise

A hand-drawn "circle" or ellipse is also not exactly symmetric about its axes. To
capture this, decorrelate the radius factor applied to x versus y by a constant
multiplier that is **fixed once per rendering pass**, not resampled at every point:

```javascript
// Once per pass:
const xyDecorrelation = 0.85 + rand() * 0.3;
// Then reused for every sampled point within that pass.
```

This is the exact bug described in 3.1 — getting this constant's scope wrong (randomizing
it per-point instead of per-pass) silently reintroduces the hairy-circle failure even
when every other part of the harmonic model is correct. If a circle looks hairy despite
using only low-frequency harmonics, check this first.

### 3.5 The center is not quite the center

When a hand-drawn circle is accompanied by construction elements — a marked center
point, a radius line, a tangent line — do not assume the marked center coincides
exactly with the geometric center of the curve you rendered, or that a "radius" segment
drawn from that marked center to a point on the curve is exactly length `R` in every
direction. In a real drawing these are two separate hand movements (draw the circle;
separately, mark a center and draw a radius) and they will not perfectly agree. Jitter
the marked center point and the curve's true rendering center **independently**, by a
few pixels each:

```javascript
const markedCenter = jitterPoint(centerTheoretical, 5);
const drawCenter   = jitterPoint(centerTheoretical, 4); // independent jitter
// Render the ellipse using drawCenter.
// Render the "radius" segment from markedCenter to a point computed relative to drawCenter.
```

This is a direct application of the Part 1 principle: don't let two independently-drawn
things secretly share one perfect coordinate.

---

## Part 4 — Composite figures: making dependent geometry follow the actual drawing

This part covers how to correctly chain multiple hand-drawn elements together when
later elements are mathematically defined in terms of earlier ones (a midpoint of a
drawn side; a median from a vertex to that midpoint; a tangent line at a point on a
drawn curve). This is where the Part 1 principle becomes concrete engineering.

### 4.1 Never compute a dependent point from the idealized geometry

If you draw a triangle side from vertex A to vertex B using the hand-drawn stroke
renderer from Part 2, the *rendered path* on screen is a wobbly curve, not the straight
line from A to B. If you now need "the midpoint of side AB" for some further
construction (e.g., a median), computing `midpoint(A, B) = (A+B)/2` gives you a point
that is mathematically the midpoint of the *ideal* segment — which may sit visibly
off of the wobbly curve you actually rendered.

This is a real, observed failure: it produces marked points that appear to "float" a
few pixels away from the line they're supposed to be sitting on, which reads as sloppy
in a way that undermines the whole effect — a hand is in fact very good at marking a
point *on* a line that is already drawn (this is a much easier task than making
multiple lines agree with each other), so a floating point breaks the illusion more
than almost anything else in this document.

### 4.2 The fix: sample and expose the actual rendered trajectory

Have your stroke-drawing function retain the array of points it actually rendered
(from its first pass, which is the "reference" pass), and expose an accessor that
returns a point at any fractional position `t` (0 = start, 1 = end, 0.5 = midpoint)
along that *actual* rendered path, via linear interpolation between the nearest sampled
points:

```javascript
function pointAtT(t) {
  const idx = Math.min(realPoints.length - 2, Math.max(0, Math.floor(t * steps)));
  const frac = t * steps - idx;
  const p0 = realPoints[idx], p1 = realPoints[idx + 1];
  return { x: p0.x + (p1.x - p0.x) * frac, y: p0.y + (p1.y - p0.y) * frac };
}
```

Then any downstream construction uses `side.pointAtT(0.5)` instead of
`midpoint(A, B)`. This one change is responsible for the single largest visible quality
jump observed during development of this technique — more than any noise-tuning
adjustment.

### 4.3 Draw in dependency order

This forces a specific ordering on your drawing code: you must render a stroke and
retain its trajectory *before* you can correctly compute anything that depends on a
point along it. Structure the code as an explicit pipeline:

1. Draw primitive elements (triangle sides, a circle) first; keep their return values.
2. Compute derived points (midpoints via `pointAtT`, tangent directions via local
   derivative) from those return values.
3. Draw dependent elements (medians, radii, tangent lines) using the derived points.
4. Only mark dots / labels last, once all geometry that determines their position has
   actually been rendered.

### 4.4 Let concurrency/coincidence fail on its own

As established in Part 1.3: once you are correctly drawing medians from actual
rendered midpoints (4.2) with honest ~1% per-segment error (Part 2), do **not** add any
additional logic to force the three medians to nearly meet. They will already fail to
meet exactly, by a small and visually convincing margin, purely as an emergent
consequence of three independently-imperfect lines. Adding correction logic on top
(artificially bending the third median toward the intersection of the first two, for
example) is redundant at best and, if overtuned, produces a *worse*, uncanny result
where the near-meeting is suspiciously too clean or too rough. This was tested
directly: an early version of this technique used exactly this kind of artificial
correction, and simplifying it away — trusting the emergent imperfection instead — was
a strict improvement. See Part 5.2 for detail.

### 4.5 Shared vertices across adjacent shapes (tilings)

When multiple regular polygons share an edge or vertex (e.g., a honeycomb tiling of
hexagons), a vertex that is geometrically shared between two shapes must receive
**exactly the same jitter** in both shapes, or the shared edge will visibly split into
two separate, non-coincident edges. Cache jittered points by a rounded coordinate key
so that repeated lookups of "the same" theoretical point return the identical jittered
result:

```javascript
const pointCache = new Map();
function sharedJitter(p, amount) {
  const key = Math.round(p.x / 2) + '_' + Math.round(p.y / 2); // small tolerance grid
  if (pointCache.has(key)) return pointCache.get(key);
  const jp = jitterPoint(p, amount);
  pointCache.set(key, jp);
  return jp;
}
```

Note this only fixes the *endpoints* of a shared edge. The two strokes drawn for that
shared edge (once as a side of each adjacent polygon) will still each get their own
independent Part-2 trajectory between those endpoints, so the shared edge typically
renders as a very slightly doubled or thicker line. Whether to treat this as acceptable
texture (it plausibly matches a hand re-tracing a boundary between two adjacent cells
it drew separately) or to explicitly deduplicate and draw such edges exactly once is a
judgment call depending on the desired final look.

### 4.6 Deriving centers of regular polygons from an already-placed neighbor

When placing the center of a second regular polygon that must share an exact edge with
a first, already-positioned polygon, **do not** derive the offset from a memorized
trigonometric distance formula (e.g., "center-to-center distance for hexagons sharing
an edge is `side * sqrt(3)`"). Such formulas are easy to misapply (wrong reference
length, wrong angle convention) and failures are hard to visually debug because the
resulting overlap can look almost-plausible. Instead, compute it geometrically and
robustly:

1. Compute the *actual* vertices of the first polygon.
2. Identify the two vertices that form the edge to be shared.
3. Find that edge's midpoint `M`.
4. Reflect the first polygon's center `C` through `M`: the second polygon's center is
   `C' = 2M - C`.

```javascript
function reflect(P, M) { return { x: 2 * M.x - P.x, y: 2 * M.y - P.y }; }
```

This is exact for any polygon orientation and requires no memorized formula, so it
cannot be misapplied. When in doubt, verify a new geometric construction with a plain,
un-jittered, brightly-colored debug rendering (see Part 6.2) before adding any
hand-drawn styling on top — it is much easier to see a wrong offset in bare colored
polygons than underneath perturbation and stroke texture.

### 4.7 Angle imperfection for constructions requiring perpendicularity

For figures requiring approximate right angles (e.g., a rectangle), do not build the
shape from four algebraically perfect corners and then jitter the strokes. Instead,
construct it by "walking" vertex to vertex, accumulating a small random angular error
at each turn and a small random length error on each side:

```javascript
function angleError() {
  const magnitude = degToRad(0.4 + rand() * 1.4); // ~1° average, see note below
  return (rand() > 0.5 ? 1 : -1) * magnitude;
}
function lengthError(target) {
  return target * (1 + (rand() - 0.5) * 0.02); // ~1%
}

let heading = initialAngle;
function step(from, targetLen, turnAngle) {
  const len = lengthError(targetLen);
  const to = { x: from.x + Math.cos(heading) * len, y: from.y + Math.sin(heading) * len };
  heading += turnAngle; // 90° + angleError(), for a rectangle
  return to;
}
```

**Do not close the shape algebraically.** Draw the final side back toward the original
starting vertex as drawn (not as recomputed) — the walk will not exactly return to the
start, and that small gap at the final corner is itself a realistic and desirable
imperfection, not a bug to be hidden.

**On the magnitude of the angular error:** an average error of roughly 3° might seem
like a reasonable guess for "eyeballing a right angle," but empirically this reads as
too large — the resulting rectangle looks visibly skewed rather than merely
hand-drawn. A well-trained hand estimates a right angle quite well; an average error
closer to **1°** (with a small spread, e.g. uniformly 0.4° to 1.8°) matches reference
images much better. If your rendered rectangle looks "tilted" rather than merely
"imperfect," the angular error magnitude is very likely set too high — this was a
directly observed and corrected mistake during development (see Part 5.3).

---

## Part 5 — Catalogue of specific mistakes made during development

This part exists because *naming the specific failure and its visual signature* is
more useful to a future implementer than an abstract warning. Each of these was an
actual mistake made and corrected while developing this technique, kept here so it is
not repeated.

### 5.1 Independent multi-pass noise creates a "lens" or crossing-loop artifact

**Mistake:** implementing "pencil texture" (Part 2.4) by giving each of 2 passes its
own independent large-amplitude noise trajectory, rather than one shared trajectory
with small per-pass jitter.

**Visual signature:** the two passes visibly diverge partway along the stroke and
cross over each other, creating a lens or loop shape in the middle of the line instead
of a single slightly-textured line. This is very easy to spot even at a glance.

**Fix:** generate the trajectory once per stroke; all passes follow it with only a
small (`passSpread` on the order of 0.6-0.8px) additional per-point jitter, not a
fresh independent trajectory.

### 5.2 Artificially forcing near-concurrency after the geometry is already honest

**Mistake:** after correctly drawing three medians using honestly-imperfect (~1% error)
straight strokes, an intermediate version of this technique added extra logic to bend
the third median partway toward the computed intersection of the first two, plus
marking the "meeting point" with an oversized dot to visually paper over any remaining
gap.

**Why it seemed necessary at the time:** the concern was that three independently-drawn
~1%-error line segments might visually diverge *too much*, failing to look like they
were even attempting to meet at a common point.

**Why it was unnecessary:** once dependent points were correctly computed from actual
rendered geometry (Part 4.2 — in particular, once the median endpoints were the real
midpoints of the real, already-drawn sides, not the algebraic midpoints of the ideal
vertices), the emergent disagreement between the three medians was already small and
convincing on its own. The extra forcing logic was redundant, and matching it to
"looks right" required fragile hand-tuning of a `correctionFactor` constant.

**Fix:** removed the forcing logic entirely. Draw each median honestly from a real
vertex to the real midpoint of the real opposite side. Trust Part 1.3.

### 5.3 Angular error for right angles set too high (3° instead of ~1°)

**Mistake:** initial rectangle construction (Part 4.7) used an average angular error of
approximately 3° per corner.

**Visual signature:** the resulting rectangle looked visibly skewed or tilted, rather
than merely hand-drawn — a qualitatively different and less desirable effect, since a
skewed rectangle reads as "wrong shape" rather than "imperfect drawing of the right
shape."

**Fix:** reduced average angular error to approximately 1° (range roughly 0.4°-1.8°).
This is because a right angle is, empirically, one of the *easier* things to estimate
by eye — closer in difficulty to drawing a straight ~1%-accurate line than to a
genuinely hard freehand task.

### 5.4 Marked points not lying exactly on their supporting stroke

**Mistake:** computing a side's midpoint algebraically from its ideal endpoints
(`(A+B)/2`) and marking a dot there, when the side itself was rendered as a wobbly
hand-drawn stroke that deviates from the straight line between those endpoints.

**Visual signature:** the marked dot appears to float slightly off the line it should
be sitting on — often only by a few pixels, but immediately noticeable and
disproportionately damaging to the perceived realism, because (per Part 1.2) accurately
marking a point on an already-existing line is something a real hand does very well,
so getting it wrong reads as an obvious, avoidable error rather than a plausible human
imperfection.

**Fix:** Part 4.2's `pointAtT` accessor — always derive marked points from the actual
rendered trajectory of their supporting stroke, never from idealized coordinates.

### 5.5 Hairy/fluffy circle from per-point-scoped randomness

**Mistake:** see Part 3.1 and 3.4 in detail. Summary: a random decorrelation factor
intended to be constant for an entire rendering pass was instead being resampled at
every individual point along the curve, reintroducing high-frequency noise even though
the harmonic frequencies themselves were correctly kept low.

**Visual signature:** the circle's outline looks fuzzy/hairy/fluffy rather than having
a single smooth line with a globally-asymmetric shape, even though nothing in the
"visible" harmonic parameters (frequency, amplitude) looked wrong on inspection.

**Fix:** audit every source of randomness in a curve-drawing function for its *scope*
— is it evaluated once per pass (correct, for things meant to be a global shape
property) or once per sampled point (only correct for genuinely local, high-frequency
effects, which should be rare in this entire technique)? When a curve looks hairy
despite ostensibly-low-frequency harmonics, this scope question is the first thing to
check.

### 5.6 Overlapping hexagons from a memorized center-distance formula

**Mistake:** placing the centers of three mutually-adjacent regular hexagons using a
memorized formula for center-to-center distance (`side * sqrt(3)`) combined with a
manually-reasoned-about angle for the direction to each neighbor.

**Visual signature:** the three hexagons visibly overlapped near their shared vertex
instead of tiling cleanly, even though the distance value used was, in isolation,
dimensionally correct — the error was in the *angular* component of the offset, which
is easy to get wrong when reasoning about it abstractly rather than deriving it from
the actual shape.

**Fix:** Part 4.6's reflection-through-shared-edge-midpoint technique, which is exact
by construction and has no angle convention to get wrong. Verified with a plain
colored-outline debug render (Part 6.2) before adding hand-drawn styling.

### 5.7 Composite figure geometry misjudged from memory of the reference image

**Mistake:** when reproducing a cone intersected by two tilting planes (rendered as
rectangles) with a visible elliptical cross-section, an initial implementation placed
the two rectangles far apart (like two separate "wings" off the cone) and placed the
cross-section ellipse at an arbitrary height not actually corresponding to where the
two rectangles overlapped.

**Visual signature:** the composition did not resemble the reference image's tight,
low "X" crossing of the two planes near the upper-middle of the cone, and the ellipse
appeared to float at an unrelated height rather than marking the actual intersection
of the visible planes.

**Fix:** re-examined the reference image specifically to identify *where the two
rectangles cross each other*, and derived the ellipse's height and center from that
crossing point rather than from an independent, a priori height calculation. General
lesson: for composite figures with several interacting elements, re-check the specific
reference image for how elements relate to each other positionally — do not assume a
plausible-sounding independent placement for each element will compose correctly.

---

## Part 6 — Practical workflow recommendations

### 6.1 Render with a real browser engine, not a static image library

The techniques in this document assume `<canvas>` 2D rendering (via HTML/JS), driven
by a headless browser (e.g., Playwright) to capture a screenshot. This is strongly
preferable to generating equivalent shapes with a static plotting/image library,
because:

- Canvas path/stroke APIs (`lineCap`, `lineJoin`, variable `lineWidth` per draw call,
  `setLineDash`) closely match how a pencil/marker stroke actually composites, with
  minimal extra code.
- It is trivial to layer multiple passes with `globalCompositeOperation` defaults that
  look like ink/graphite building up, rather than flat-shaded vector fills.
- Iteration is fast: edit the HTML/JS, re-run the same capture script.

### 6.2 Debug geometry separately from styling

When developing a new composite figure (Part 4, Part 5.6, Part 5.7), first render the
*exact, unperturbed, un-styled* geometry as plain thin colored outlines (one distinct
color per component) with no jitter, no multi-pass texture, and no curvature
irregularity. Verify visually that shapes coincide, tile, or intersect exactly where
they should. **Only after that is confirmed correct**, layer on the hand-drawn styling
from Parts 2-3. This decouples two very different classes of bug (wrong geometry vs.
wrong stylization) that are much harder to tell apart once both are present at once —
several of the mistakes in Part 5 were diagnosed faster once isolated this way.

### 6.3 Calibrate parameters against a real reference image, not by eye alone

Numeric parameters in this document (wobble amplitudes, line widths, angular error
magnitudes, harmonic counts) are given as ranges that worked well across a specific set
of tested reference images, at a specific rendering scale (roughly 700-1300px per
figure). They are starting points, not universal constants. When adapting this
technique:

1. Render a candidate figure at the same pixel scale as a real reference photo.
2. Crop/resize both to the same height and place them side by side.
3. Look specifically for the failure signatures in Part 5 (skew instead of imperfection;
   floating marked points; hairy outlines; doubled/crossing strokes) — these are far
   more diagnostic than a vague "does it look right" judgment, and each has a specific,
   different parameter to fix.

### 6.4 Order of operations checklist for a new figure

1. Identify which elements are *primitive* (their position is chosen directly, e.g. a
   triangle's vertices, a circle's center and radius) versus *dependent* (their
   position is computed from other elements, e.g. a midpoint, a tangent line, an
   intersection).
2. Apply small positional jitter (~1%) only to primitive elements' defining
   coordinates.
3. Render primitive strokes/curves using Parts 2-3, retaining their sampled trajectory.
4. Compute every dependent element's defining points from the *actual rendered
   trajectories* of the elements it depends on (Part 4.2), never from idealized
   coordinates.
5. Render dependent strokes.
6. Do not add forced-agreement logic for things that are supposed to nearly-but-not-
   quite coincide (Part 4.4) — verify the emergent disagreement looks reasonable, and
   if it does not, revisit step 2's jitter magnitude rather than adding correction
   logic downstream.
7. Mark points/dots last, always at positions derived from already-rendered geometry.
8. Compare side-by-side against a reference image per 6.3 before considering the figure
   done.

---

## Appendix — Reference implementation

A complete, reusable JavaScript module implementing Parts 2-4 (`handTrajectory`,
`handSegment`, `handDot`, `handEllipse`) is included alongside this document as
`hand-draw.js`. It is designed to be dropped into any HTML page with a `<canvas>`
element and driven by figure-specific geometry code, following the pattern shown
throughout Part 4 and the worked examples referenced in Part 5.

Example minimal usage:

```javascript
const ctx = document.getElementById('c').getContext('2d');
const { rand, handSegment, handDot, handEllipse } = makeHandDraw(ctx, /* seed */ 42);

// Primitive: a triangle side, jittered ~1% at the vertex level before drawing
const A = jitterPoint(A_theoretical, 9);
const B = jitterPoint(B_theoretical, 9);
const sideAB = handSegment(A.x, A.y, B.x, B.y, {
  wobble: 2.0, lineWidth: 8, widthVariation: 2.5, passes: 2, passSpread: 0.7
});

// Dependent: the midpoint, read from the ACTUAL rendered stroke, not algebraically
const Mab = sideAB.pointAtT(0.5);
handDot(Mab.x, Mab.y, 10); // lands exactly on the visible curve
```

See the eight worked example figures (files prefixed `01_` through `08_`, each as an
`_original` / `_mimic` pair) for complete, tested applications of this pattern to
triangles, circles, ellipses, hyperbolas, cones, pentagrams, and hexagon tilings, each
paired with the original hand-drawn reference image it was built to match.
