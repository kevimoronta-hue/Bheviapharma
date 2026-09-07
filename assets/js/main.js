/* ===========================
   Navbar Scroll
=========================== */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ===========================
   Mobile Menu
=========================== */
const hamburger = document.getElementById('hamburger');
const navOverlay = document.getElementById('nav-overlay');
const navCloseButtons = document.querySelectorAll('.nav-close');

if (hamburger && navOverlay) {
  const closeMenu = () => {
    hamburger.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navOverlay.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* Clic en dehors du panneau = Fermeture */
  navOverlay.addEventListener('click', (e) => {
    if (e.target === navOverlay) {
      closeMenu();
    }
  });

  navOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

if (navCloseButtons.length > 0) {
  navCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ===========================
   Active Nav Link
=========================== */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-overlay a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ===========================
   Scroll Reveal
=========================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ===========================
   Formation Tabs
=========================== */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');
    const tabGroup = btn.closest('.formation-tabs-section') || document;
    tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    tabGroup.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const content = document.getElementById(target);
    if (content) content.classList.add('active');
  });
});

/* ===========================
   Accordion
=========================== */
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
    // Toggle current
    if (!isOpen) item.classList.add('open');
  });
});

/* ===========================
   Contact Form + Confirmation
=========================== */
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Envoi en cours…';

    setTimeout(() => {
      // Masquer le formulaire
      contactForm.style.display = 'none';

      // Afficher la confirmation
      if (successMessage) {
        successMessage.style.display = 'flex';
        successMessage.focus && successMessage.focus();
      }

      // Countdown + redirection
      let seconds = 5;
      const countEl = document.getElementById('countdown-num');
      const countdownLine = document.getElementById('redirect-countdown');

      const tick = setInterval(() => {
        seconds--;
        if (countEl) countEl.textContent = seconds;
        if (seconds <= 0) {
          clearInterval(tick);
          if (countdownLine) countdownLine.textContent = 'Redirection…';
          window.location.href = 'index.html';
        }
      }, 1000);
    }, 1400);
  });
}

/* ===========================
   Smooth anchor scroll
=========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 76;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


/* ===========================
   Global Mobile Calendly CTA
=========================== */
(function() {
  // Inject Calendly CSS
  if (!document.querySelector('link[href*="calendly"]')) {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  // Inject Calendly JS
  if (!document.querySelector('script[src*="calendly"]')) {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
  }

  // Inject floating CTA
  if (!document.querySelector('.floating-mobile-cta')) {
    const cta = document.createElement('a');
    cta.href = 'https://calendly.com/benjamin-herisson/30min';
    cta.target = '_blank';
    cta.rel = 'noopener';
    cta.className = 'floating-mobile-cta';
    cta.setAttribute('aria-label', 'Réserver un appel');
    cta.onclick = function(e) {
      if(window.Calendly) {
        e.preventDefault();
        Calendly.initPopupWidget({url: 'https://calendly.com/benjamin-herisson/30min'});
        return false;
      }
    };

    const img = document.createElement('img');
    img.src = 'assets/images/A-bhevia-blanc.png';
    img.alt = 'A Bhevia';
    img.className = 'floating-cta-icon';
    
    cta.appendChild(img);
    document.body.appendChild(cta);
  }
})();
