# 💼 Nishad Kane — Portfolio Website

A clean, responsive single‑page website to showcase my background in **Data Science, AI/ML, and Cloud Engineering**. Built with vanilla **HTML/CSS**, **Bootstrap 4**, and a sprinkle of **jQuery/Animate.css** for smooth, lightweight animations.

> **Live Demo:** [https://nishad2725.github.io](https://nishad2725.github.io)

---

## ✨ Features

| Section                    | Highlights                                            |
| -------------------------- | ----------------------------------------------------- |
| **Navbar**                 | Sticky, animated scroll‑spy links + social icons      |
| **About**                  | Hero intro with profile photo & animated text         |
| **Education & Experience** | Two‑column vertical timeline with logos & hover cards |
| **Projects**               | Responsive project grid with images & GitHub links    |
| **Certifications**         | Dark‑mode gallery of badges & credentials             |
| **Awards & Achievements**  | Card gallery of trophies & accolades                  |
| **Footer**                 | Minimal CTA + social links                            |

Additional goodies:

* Fully responsive (mobile → 4K).
* Blurred/parallax background images per section.
* Lightweight skills‑diagram widget (no external chart libs).
* Smooth scroll & subtle hover effects (Animate.css).

---

## 🛠️ Tech Stack

| Layer             | Tools                                           |
| ----------------- | ----------------------------------------------- |
| **Structure**     | HTML5, Bootstrap 4.5                            |
| **Styling**       | Custom CSS, Google Fonts (Poppins), Animate.css |
| **Scripting**     | jQuery 3.5, `skills-diagram.coderbits.js`       |
| **Icons & Media** | Font Awesome 4.7, Unsplash, custom SVG/PNG      |
| **Hosting**       | GitHub Pages                                    |

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
$ git clone https://github.com/nishad2725/nishad2725.github.io.git
$ cd nishad2725.github.io

# 2. Install live‑reload server (optional)
$ npm install -g live-server

# 3. Launch in the browser
$ live-server .
```

### Deploying to GitHub Pages

1. Push the code to the `main` branch of a `<username>.github.io` repo.
2. Pages will auto‑deploy. 🎉

For a project site (e.g. `/portfolio`), enable **Pages → Deploy from `/docs`** or `/dist`.

---

## 📁 Project Structure

```
├─ index.html            # Main single‑page app
├─ style.css             # Global styles & overrides
├─ skills-diagram.css    # Circular skills diagram styles
├─ skills-diagram.coderbits.js
├─ assets/               # Images, logos, gifs
│  ├─ preview.png        # Banner screenshot for README
│  └─ ...
└─ docs/                 # (Optional) Build/output folder for GH Pages
```

---

## 🧩 Customisation

| Want to…                 | Edit                                               |
| ------------------------ | -------------------------------------------------- |
| Change navigation links  | `index.html` → `<nav>` list                        |
| Update colours / fonts   | `style.css` global variables                       |
| Swap section backgrounds | `.about-section`, `.timeline`, etc. in `style.css` |
| Add / remove projects    | `#publications` cards in `index.html`              |
| Replace images           | Drop new files in `assets/` + update `src`         |

---

## 🤝 Contributing

Pull requests are welcome! If you spot a bug or have an idea for a new feature:

1. **Fork** the repository
2. **Create** your feature branch `git checkout -b feature/featureName`
3. **Commit** your changes `git commit -m 'Add awesome feature'`
4. **Push** to the branch `git push origin feature/featureName`
5. **Open** a Pull Request

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

**Nishad Kane**
[Portfolio](https://nishad2725.github.io) · [LinkedIn](https://linkedin.com/in/nskane) · [GitHub](https://github.com/nishad2725) · [Email](mailto:nskane@asu.edu)

---

## 📅 Roadmap / Future Work

* [ ] Add dark‑mode toggle
* [ ] Migrate to Bootstrap 5 + Sass
* [ ] Integrate Netlify CMS for easy content edits
* [ ] Unit + visual regression tests via Playwright
* [ ] Lighthouse CI automated audits

> *“Innovative, collaborative, and relentlessly data‑driven — always ready for the next challenge.”*
