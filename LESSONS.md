# Lliçons apreses — consulta per tema, no de lectura obligatòria sencera

Aquest fitxer existia fins ara com la §5 de `HANDOFF-COLD-START.md`
("Hard-won lessons — read before drawing or coding anything"), que
demanava llegir-les TOTES abans de tocar res. Amb el projecte creixent
(vuit lliçons ja, i comptant), aquell fitxer s'estava fent tan llarg que
llegir-lo sencer cada vegada era ell mateix un cost real — la mateixa
mena de problema que aquestes lliçons intenten evitar en altres àmbits
del projecte.

**`HANDOFF-COLD-START.md` segueix sent de lectura obligatòria sencera**
(és curt: estat actual, xifres, pendents, referència d'arquitectura). Aquest
fitxer, en canvi, és per **consultar per tema quan el que estàs fent hi
toca** — abans de dibuixar una figura nova (§1), abans de tocar
`localStorage` (§2), abans de perseguir un bug visual de CSS (§3), abans de
construir un ZIP de lliurament (§4), abans de dissenyar una UI nova (§5),
abans d'escriure prosa en català (§6), abans de plantejar-te introduir un
framework de tests (§7), o abans de fer una tria de disseny no demanada
explícitament (§8). Si el que fas no toca cap d'aquests temes, no cal que
llegeixis res d'aquí.

---

## 1 — `irregularity` / `wobble` no escalen linealment amb la mida de la figura

`hand-draw.js`'s `irregularity` parameter (used by `handEllipse`) is a
*percentage* of the shape's characteristic dimension. At the scale most
guide figures are drawn (radius 150-300px), 0.02-0.03 reads as an
imperceptible, pleasant hand-wobble. At icon scale (radius ~36px, meant
to be viewed at ~40px on screen), the *same percentage* becomes enough
*absolute* pixel deviation to break circular symmetry and read as "some
odd non-circular shape" — this exact bug shipped once and had to be fixed
reactively (`icona-circumferencia.png`, fixed by dropping to 0.006).
**When drawing anything small** (icons, small glossary figures), test at
the real display size before publishing, not just at the rendered
canvas's native resolution — resize the PNG down and look at it, the same
way a phone screen will.

## 2 — Distingeix "mai desat" de "l'usuari ha triat explícitament buit"

Both `localStorage.getItem(key)` returning `null` (key never set) and a
saved value that happens to be `"[]"` (user actively chose "none/all")
can look the same if you naively do
`JSON.parse(localStorage.getItem(key)) || defaultValue`. They are not the
same thing, and conflating them caused a real bug risk once: the category
filter's own invariant treats an empty array as "all selected," so a
naive default-value fallback would have made a *first-time visitor* see
"all categories" instead of the newly-requested "only Triangles" default.
Fixed by checking `localStorage.getItem(key) === null` explicitly before
parsing. Apply the same care anywhere a persisted default is introduced
or changed.

## 3 — CSS `border-color` i `box-shadow` poden semblar idèntics a un usuari

A visible ring around a button can come from `border`, `outline`, or
`box-shadow` — three different properties that render almost identically
depending on color and offset. When an owner reports "I fixed the border
but I still see a brown ring," don't assume the fix didn't apply; check
every rule that could paint a ring at that same location, including
`:hover` and `:focus-visible` states, which are easy to forget when
fixing the base/`:active` state. This happened for real once (border
fixed correctly two deliveries earlier; the *focus ring*, a separate
`box-shadow` in the project's `--focus-ring` token, was still brown and
visible after a mouse click in some browsers — Safari shows
`:focus-visible` after a mouse click more often than Chromium does, so
this kind of bug can be invisible in your own testing browser and real
for the owner).

**The full arc of this bug is worth knowing, because the final act was a
different bug entirely.** After the CSS fix shipped, the owner still saw
the brown ring and added a `?v=2` cache-buster to `index.html` to force a
refresh — it didn't help, and they reported the bug again. The actual
cause: `<link rel="stylesheet" href="css/components.css"?v=2>` — the
`?v=2` landed **outside** the `href` attribute's quotes, invalid HTML
that the browser silently ignores. The exact same stylesheet URL was
requested every time, cache-buster or not, so the fix genuinely never
reached the browser. Lesson: when an owner says "I tried refreshing /
adding a cache-buster and it's still broken," check the mechanics of how
they did it before re-investigating the original bug — the fix may have
been correct all along and something else is preventing it from loading
at all.

**Third act (ago. 2026), same symptom, no syntax error this time.** A
mobile-spacing fix shipped, touching only `components.css` and
`base.css`. The owner deployed to GitHub Pages and screenshotted the
live page: none of the three changes were visible. The HTML was valid
this time — `href="css/components.css?v=3"`, correctly quoted. The bug
was simpler and, in hindsight, obvious: `?v=3` had been sitting there
since an earlier delivery, and the new CSS content shipped under that
same unchanged query string. From the browser's (or an intermediate
CDN's) point of view, it was the exact same URL it had already cached —
nothing about "the syntax is correct" tells a cache that the *content*
behind that URL changed. Compounding it, `tokens.css` and `base.css` had
never carried a version string at all, so any future change to either of
those two was silently exposed to this same failure mode waiting to
happen. Fixed by bumping all three stylesheet links together to `?v=4`
and adding a comment instructing that all three be bumped on every CSS
deploy, regardless of which file actually changed — remembering "did I
change the version number" per file, per delivery, is exactly the kind
of manual bookkeeping that reliably gets forgotten. **General lesson,
now confirmed three times over two unrelated bugs in this exact
project:** a cache-buster only does its job if (a) the markup is valid
*and* (b) the value actually changes on every deploy that ships CSS. If
an owner ever reports "I refreshed / redeployed and still don't see the
change" after a CSS-only fix, check both of those before touching the
CSS logic again — the fix is very often already correct and sitting on
disk, unreachable.

## 4 — Un ZIP diff mai pot esborrar un fitxer

Every delivery this project ships is a ZIP of new/changed files, applied
on top of the owner's existing repo. This mechanism **cannot express
"delete this file."** Every time a delivery makes a file obsolete (e.g.
replacing the old 3-strip demo images with 15 individual panel images),
the delivery note must say explicitly, in its own section, exactly which
files to delete manually — and you must remember this when verifying
your own work end-to-end (a full "apply every ZIP in sequence" test will
NOT match your working copy unless you also manually delete the files
your own notes told the owner to delete).

## 5 — Reaprofita el mateix mecanisme d'interacció en lloc d'inventar-ne un de nou

More than once, a new feature turned out to be a variation on an
existing, working mechanism rather than something new: the step-by-step
demo rewrite reused `detall.js`'s exact reveal-one-at-a-time pattern
(`pintaGuia`/`revela`) instead of inventing a new one; the category
filter reused the 2D/3D toggle's persisted-state pattern but deliberately
changed one invariant (empty = "all" instead of "never both off"). Before
building new interactive UI, check whether `llista.js`, `detall.js`, or
`demo.js` already solve a structurally similar problem — refactor and
extend rather than duplicate.

## 6 — Verifica castellanismes i text no català abans de lliurar

`verifica_projecte.py` includes a castellanism check across guide/demo
text. It has caught real mistakes (e.g. `después` typed instead of
`després`). Any new Catalan prose — delivery notes included — should be
grepped for `después` and similar before considering it done; the check
in the script only covers guide/demo content fields, not every `.md`
note, so don't rely on it alone for prose outside those fields.

## 7 — Aquest projecte NO té cap framework de tests més enllà de `verifica_projecte.py` i scripts de Playwright manuals

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

## 8 — Una tria de disseny deliberada, mai confirmada, és un bug esperant a ser reportat

The category-filter toggle's active state used brown (`var(--pencil)`)
as its background — a real, intentional choice made to visually
distinguish it from the 2D/3D toggle (black, `var(--ink)`), so the two
filters wouldn't be confused with each other. It was never explicitly
run past the owner as a choice ("I'm making this one brown so it reads
as a different filter — okay?"). Two deliveries later, the owner
reported "that brown color, I don't want it" — accompanied by a
screenshot with hand-drawn arrows pointing at the fill itself, not at
any edge or ring, which is what made the actual target unambiguous
(earlier reports without that kind of visual pointer had been chased as
CSS `border`/`box-shadow` bugs instead, wasting a round). Fixed by
making it match the 2D/3D toggle exactly (`var(--ink)`).

**The lesson isn't "the color was ugly."** It's that any styling
decision made unilaterally — a color, a size, an animation — that
wasn't explicitly asked for is a latent revision request, not a closed
decision, even if it's never been complained about yet. When you make
this kind of call while building something new, say so plainly in your
delivery note ("I picked brown here to distinguish it from X; happy to
change it") rather than presenting it as self-evidently correct — it
gives the owner one clean shot at redirecting it instead of a
back-and-forth chasing the wrong kind of bug.

## 9 — Un punt marcat "sobre" una corba dibuixada a mà ha de llegir-se de la corba real, mai de la fórmula ideal

`handSegment`/`handEllipse` both expose `.pointAtT()` / `.pointAtAngle()`
to read a point off the *actual drawn trajectory* (with its hand-wobble
jitter already applied), not the mathematically ideal position. Two real
"incidence bugs" shipped for this exact reason before being caught on
visual review: a cylinder's vertical edges connecting to the *ideal*
ellipse coordinate instead of the ellipse's real drawn edge (didn't quite
close), and four points on a projected line placed at the *ideal*
coordinate instead of the wobbly line's real path (visibly floated off
the line in places). Always read points off a real curve/segment with
`.pointAtT()` / `.pointAtAngle()` when a point must sit exactly on
something hand-drawn — never recompute the ideal coordinate and hope the
wobble is small enough not to matter.
