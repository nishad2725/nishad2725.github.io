# CLAUDE.md — Coding Standards for nishad2725.github.io

## Project Overview
Pure static portfolio site hosted on GitHub Pages.
**Zero build process.** No npm, no Webpack, no Sass compilation.
All code must work by opening `index.html` directly in a browser.

## Stack
- HTML5 (semantic elements: `<section>`, `<nav>`, `<article>`, `<footer>`)
- CSS3 with CSS custom properties (variables) — no preprocessors
- Vanilla JavaScript (ES6+) — no TypeScript
- Bootstrap 5.3 via CDN
- All libraries loaded via CDN (jsDelivr preferred, cdnjs fallback)

## File Organization
```
nishad2725.github.io/
├── index.html                  (single HTML file at root)
├── CLAUDE.md                   (this file)
├── README.md
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── images/
        ├── profile/            (conv.jpg)
        ├── projects/           (Ragent.jpg, log.jpeg, stock.jpg, RL.gif, payment.jpg, Cust.jpg)
        ├── certs/              (ibm.jpg, aws.jpg, gen.jpg, ibm_ml.jpg, sql.jpg, python.jpg, dv.jpg, sql_ltcd.jpg)
        ├── awards/             (award_exceptional.jpg, award_codeshastra.jpg, award_idealstudent.jpg)
        ├── logos/              (logo_asu.png, logo_djsce.png, logo_kolhapur.jpeg, logo_tilak.jpg, logo_ey.png, ey.jpg)
        └── backgrounds/        (img1.jpg–img7.jpg subset)
```

## HTML Conventions
- All section IDs use kebab-case: `id="hero"`, `id="about"`, `id="tech-stack"`
- Sections follow this exact order:
  1. `#hero` 2. `#about` 3. `#tech-stack` 4. `#experience` 5. `#education`
  6. `#projects` 7. `#certs` 8. `#awards` 9. `#contact`
- Every `<img>` must have a descriptive `alt` attribute
- Add `loading="lazy"` to all images below the fold (everything except the profile photo)
- Use `data-aos` attributes for scroll animations — never inline style animations
- Use `<details>` / `<summary>` for collapsible experience/education bullets (no JS required)

## CSS Conventions
- All color/spacing/font values must use CSS variables defined in `:root`
- Variable naming: `--color-primary`, `--color-bg`, `--font-heading`, `--spacing-section`
- Never use `!important` except to override Bootstrap specifics
- Mobile-first media queries only (`min-width` breakpoints after mobile defaults)
- Glassmorphism pattern (reuse `.glass-card`):
  ```css
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.10);
  ```

## JavaScript Conventions
- All JS lives in `assets/js/main.js` — no inline scripts in HTML except the Particles.js config
- Use `DOMContentLoaded` wrapper for all initialization
- Particles.js config object lives inline in `index.html` as a `<script>` block immediately
  after the CDN script tag (required by the library's `particlesJS()` call pattern)
- **No jQuery** — Bootstrap 5 does not require it; use vanilla JS only
- `AOS.init()` called once in `main.js`

## CDN Library Versions (pinned — do not upgrade without testing)
| Library | URL |
|---------|-----|
| Bootstrap CSS | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` |
| Bootstrap JS | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js` |
| Font Awesome | `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css` |
| AOS CSS | `https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css` |
| AOS JS | `https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js` |
| Typed.js | `https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js` |
| Particles.js | `https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js` |
| Google Fonts | Space Grotesk (300,400,500,700) + Inter (300,400,500,600) |
| Simple Icons | `https://cdn.simpleicons.org/[slug]/[hexcolor]` (inline SVG via img tag) |

## Analytics
- GoatCounter script placed just before `</body>`
- Account: `https://nishad2725.goatcounter.com/count`
- No other tracking. No cookies. GDPR-compliant.

## Performance Rules
- Images must be under 500 KB before committing (compress with squoosh.app)
- `RL.gif` is the one exception — keep as-is (it's a live demo)
- All CDN links must use `https://`
- No base64-encoded images in CSS

## Git Conventions
- Commit messages: imperative mood, lowercase
  - ✅ `"add tech stack section"`
  - ✅ `"fix mobile nav overflow"`
  - ❌ `"Added tech stack section"`
- Never commit `.DS_Store`, `Thumbs.db`, `*.log`, or `node_modules/`

## GitHub Pages Notes
- The site deploys from the `main` branch root — no `/docs` subfolder needed
- After pushing, allow ~60 seconds for Pages to rebuild
- Test at: `https://nishad2725.github.io` (not localhost) before calling done
- Verify GoatCounter: open Network tab, filter `gc.zgo.at`, confirm 200/204 response
