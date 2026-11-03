# COTR LMS Transition Timeline

A single-page, embeddable vertical timeline for College of the Rockies' LMS transition (Moodle vs. D2L Brightspace).

## Structure

```
/
├── index.html          # Timeline markup (edit phases here)
├── css/
│   └── timeline.css    # Styles + COTR colour variables
├── js/
│   └── embed-resize.js # Auto-height messaging for iframe embeds
└── README.md
```

## Editing the timeline

Each phase is an `<li class="tl-item">` in `index.html`:

```html
<li class="tl-item">
  <span class="tl-marker" aria-hidden="true"></span>
  <article class="tl-card">
    <h3 class="tl-title">Phase name</h3>
    <p class="tl-date">Month to Month Year</p>
    <ul class="tl-list">
      <li>Item</li>
    </ul>
  </article>
</li>
```

- Add `tl-milestone` to the `<li>` for a gold diamond milestone (e.g. the December decision).
- Cards alternate left/right automatically on screens ≥ 768px and stack in one column on mobile.
- Colours live as CSS variables at the top of `css/timeline.css`.

## Publishing with GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`.
3. The page will be served at `https://<username>.github.io/<repo-name>/`.

## Embedding on a COTR page

Basic iframe:

```html
<iframe
  id="cotr-timeline"
  src="https://<username>.github.io/<repo-name>/"
  title="LMS transition project timeline"
  style="width:100%; border:0; min-height:900px;"
  loading="lazy"></iframe>
```

Optional auto-height (add once on the host page, if the CMS allows scripts):

```html
<script>
  window.addEventListener("message", function (e) {
    if (!e.data || e.data.type !== "cotr-timeline-height") return;
    var f = document.getElementById("cotr-timeline");
    if (f) f.style.height = e.data.height + "px";
  });
</script>
```

If the host CMS strips scripts, keep the `min-height` on the iframe and adjust it as content grows.

## Accessibility notes

- Timeline is an ordered list (`<ol>`) so screen readers announce phase order.
- `#009aa6` is used only for lines, markers and accents; text uses `#00505c`, black or dark grey to meet WCAG AA contrast.
