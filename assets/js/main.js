// main.js — nishad2725.github.io
// All initialization runs after DOM is ready

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. AOS (Animate On Scroll) ──────────────────────────────
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,    // animate only on first enter — better UX
    offset: 80     // trigger 80px before element enters viewport
  });


  // ── 2. Typed.js Typewriter in Hero ──────────────────────────
  new Typed('#typed-output', {
    strings: [
      'AI Engineer',
      'Data Scientist',
      'ML Systems Builder',
      'Product Thinker',
      'LLM Developer'
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 2000,
    loop: true,
    smartBackspace: true
  });


  // ── 3. Navbar scroll class (transparent → glassmorphism) ────
  const navbar = document.getElementById('navbar');
  const hero   = document.getElementById('hero');

  if (navbar && hero) {
    const navbarObserver = new IntersectionObserver(
      ([entry]) => {
        navbar.classList.toggle('scrolled', !entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    navbarObserver.observe(hero);
  }


  // ── 4. Active nav link highlight on scroll ──────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              link.classList.toggle(
                'active',
                link.getAttribute('href') === `#${id}`
              );
            });
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach(section => sectionObserver.observe(section));
  }


  // ── 5. Mobile navbar auto-close on link click ───────────────
  const navbarCollapse = document.getElementById('navMenu');
  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }


  // ── 6. Skill bar animation when tech-stack enters viewport ──
  const techSection = document.getElementById('tech-stack');
  if (techSection) {
    const barObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.skill-bar-fill').forEach(bar => {
            bar.style.width = (bar.dataset.width || 0) + '%';
          });
          barObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    barObserver.observe(techSection);
  }

});

// Note: particlesJS() config is inline in index.html — intentional.
// The library requires its config call immediately after the canvas div
// and after the CDN script loads. Keeping it inline makes that dependency
// explicit and avoids an initialization race condition.
