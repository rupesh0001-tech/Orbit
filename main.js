/* ==========================================================================
   Orbit AI Agent - Main Vanilla JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Stats Count-Up Animation
  // -------------------------------------------------------------------------
  const statCards = document.querySelectorAll('.stat-card');
  let hasAnimatedStats = false;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateStatCard(card, index) {
    const target = parseFloat(card.getAttribute('data-target'));
    const suffix = card.getAttribute('data-suffix') || '';
    const decimals = parseInt(card.getAttribute('data-decimals') || '0', 10);
    const valueEl = card.querySelector('.stat-value');

    const duration = 1500 + index * 80;
    const startOffset = 480 + index * 90;

    setTimeout(() => {
      let startTime = null;

      function updateCounter(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const currentValue = target * easedProgress;

        if (decimals > 0) {
          valueEl.textContent = currentValue.toFixed(decimals) + suffix;
        } else {
          valueEl.textContent = Math.round(currentValue) + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          // Final exact value formatted
          valueEl.textContent = (decimals > 0 ? target.toFixed(decimals) : Math.round(target)) + suffix;
        }
      }

      requestAnimationFrame(updateCounter);
    }, startOffset);
  }

  if (statCards.length > 0) {
    const observerOptions = {
      threshold: 0.25
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedStats) {
          hasAnimatedStats = true;
          statCards.forEach((card, index) => {
            animateStatCard(card, index);
          });
          observer.disconnect();
        }
      });
    }, observerOptions);

    const statsFooter = document.querySelector('.stats-footer');
    if (statsFooter) {
      statsObserver.observe(statsFooter);
    }
  }

  // -------------------------------------------------------------------------
  // 2. Mobile Menu Drawer Logic
  // -------------------------------------------------------------------------
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-signin');

  function openMenu() {
    document.body.classList.add('menu-open');
    burgerBtn.setAttribute('aria-expanded', 'true');
    mobileOverlay.removeAttribute('hidden');
    mobileMenu.removeAttribute('hidden');
  }

  function closeMenu() {
    document.body.classList.remove('menu-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    mobileOverlay.setAttribute('hidden', 'true');
    mobileMenu.setAttribute('hidden', 'true');
  }

  function toggleMenu() {
    const isOpen = document.body.classList.contains('menu-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (burgerBtn && mobileOverlay && mobileMenu) {
    burgerBtn.addEventListener('click', toggleMenu);
    mobileOverlay.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
        closeMenu();
      }
    });

    // Close on window resize > 720px
    window.addEventListener('resize', () => {
      if (window.innerWidth > 720 && document.body.classList.contains('menu-open')) {
        closeMenu();
      }
    });
  }
});
