document.addEventListener('DOMContentLoaded', function () {
  // --- Mobile burger toggle ---
  var burger = document.querySelector('.nav-burger');
  var navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('nav-open');
      burger.classList.toggle('nav-burger-open', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // --- Click-based Projects dropdown (works the same on desktop and mobile) ---
  document.querySelectorAll('.nav-dropdown').forEach(function (dropdown) {
    var trigger = dropdown.querySelector('.nav-dropdown-trigger');
    var menu = dropdown.querySelector('.nav-dropdown-menu');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = menu.classList.toggle('nav-dropdown-open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // Close any open dropdown when clicking outside it
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.nav-dropdown-menu.nav-dropdown-open').forEach(function (menu) {
      if (!menu.parentElement.contains(e.target)) {
        menu.classList.remove('nav-dropdown-open');
        var trigger = menu.parentElement.querySelector('.nav-dropdown-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown-menu.nav-dropdown-open').forEach(function (menu) {
        menu.classList.remove('nav-dropdown-open');
      });
    }
  });
});