// Small interactions: mobile nav toggle, footer year, simple form behavior

document.addEventListener('DOMContentLoaded', function () {
  // footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle && navToggle.addEventListener('click', () => {
    if (!mainNav) return;
    const shown = mainNav.style.display === 'flex';
    mainNav.style.display = shown ? 'none' : 'flex';
    mainNav.style.flexDirection = 'column';
    mainNav.style.gap = '12px';
    mainNav.style.padding = '12px';
    mainNav.style.background = '#fff';
    mainNav.style.position = 'absolute';
    mainNav.style.right = '18px';
    mainNav.style.top = '64px';
    mainNav.style.borderRadius = '8px';
    mainNav.style.boxShadow = shown ? '' : '0 8px 30px rgba(0,0,0,0.08)';
  });

  // Waitlist form: show small success message when user submits (note: mailto will open)
  const waitlistForm = document.getElementById('waitlist-form');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
      // allow mailto to proceed, but give quick visual feedback
      const btn = waitlistForm.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        const old = btn.textContent;
        btn.textContent = 'Opening mail client…';
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = old;
        }, 2200);
      }
      // we do not preventDefault because mailto should open the user's mail app
    });
  }

  // Add small copy-to-clipboard for course card titles on long-press (optional)
  document.querySelectorAll('.course-card h3').forEach(h => {
    h.addEventListener('click', () => {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(h.textContent.trim()).then(() => {
        const old = h.textContent;
        h.textContent = 'Copied ✓';
        setTimeout(() => (h.textContent = old), 900);
      });
    });
  });

}); 

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
  navLinks.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("show");
});

// Close menu when a link is clicked (mobile/tablet)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    faqQuestions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = null;
      }
    });
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});

// Fade-in Scroll Animation
const fadeInSections = document.querySelectorAll(".fade-in-section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fadeInSections.forEach((section) => {
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeEls = document.querySelectorAll(".fade-in");

  const revealOnScroll = () => {
    fadeEls.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementBottom = el.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // If element is inside viewport, add visible
      if (elementTop < windowHeight - 50 && elementBottom > 50) {
        el.classList.add("visible");
      } else {
        // Remove class when it leaves viewport so it can re-animate
        el.classList.remove("visible");
      }
    });
  };

  // Run on load and on scroll
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});

// Fade-up animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-up");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, {
    threshold: 0.2
  });

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});