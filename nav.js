(function () {
  var toggleBtn = document.querySelector('.site-header .nav-toggle');
  var overlay = document.getElementById('nav-overlay');
  var closeBtn = overlay ? overlay.querySelector('[data-close]') : null;
  if (!toggleBtn || !overlay) return;
  function open() {
    overlay.setAttribute('data-open', 'true');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    overlay.setAttribute('data-open', 'false');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  toggleBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  overlay.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.getAttribute('data-open') === 'true') close();
  });
})();
