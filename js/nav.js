document.addEventListener('DOMContentLoaded', function () {
  // --- Mobile burger toggle ---
  var burger = document.querySelector('.nav-burger');
  var navLinks = document.querySelector('.nav-links');
  var projectSubnav = document.getElementById('project-subnav');
  var projectsToggle = document.querySelector('.nav-projects-toggle');

  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('nav-open');
      burger.classList.toggle('nav-burger-open', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

      // Reset the project list to closed whenever the mobile menu opens
      if (isOpen && projectSubnav && projectsToggle) {
        projectSubnav.classList.remove('project-subnav-open');
        projectsToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Projects subnav toggle ---
  if (projectsToggle && projectSubnav) {
    projectsToggle.addEventListener('click', function () {
      var isOpen = projectSubnav.classList.toggle('project-subnav-open');
      projectsToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

      // On mobile, close the burger menu so the revealed project list is visible
      if (navLinks && navLinks.classList.contains('nav-open')) {
        navLinks.classList.remove('nav-open');
        burger.classList.remove('nav-burger-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});