(function () {
  const toggle = document.querySelector('.nav-toggle');
  const overlay = document.getElementById('nav-overlay');
  if (!toggle || !overlay) return;

  const closeBtn = overlay.querySelector('[data-close]');
  const focusableSelector = 'a[href], button:not([disabled])';

  function getFocusable() {
    return Array.from(overlay.querySelectorAll(focusableSelector));
  }

  function openMenu() {
    overlay.setAttribute('data-open', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
    const focusables = getFocusable();
    if (focusables.length) focusables[0].focus();
  }

  function closeMenu() {
    overlay.setAttribute('data-open', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
    toggle.focus();
  }

  toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  overlay.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (overlay.getAttribute('data-open') !== 'true') return;
    if (e.key === 'Escape') {
      closeMenu();
      return;
    }
    if (e.key === 'Tab') {
      const focusables = getFocusable();
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
