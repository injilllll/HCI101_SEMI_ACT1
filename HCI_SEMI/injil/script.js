document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu for mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const navItems = document.querySelector('.nav-items');
  if (navToggle && navItems) {
    navToggle.addEventListener('click', function() {
      const isOpen = navItems.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    // Optional: close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navItems.contains(e.target) && !navToggle.contains(e.target)) {
        navItems.classList.remove('open');
      }
    });
  }
});