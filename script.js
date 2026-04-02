document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu for mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const navItems = document.querySelector('.nav-items');
  if (navToggle && navItems) {
    navToggle.addEventListener('click', function() {
      navItems.classList.toggle('open');
    });
    // Optional: close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navItems.contains(e.target) && !navToggle.contains(e.target)) {
        navItems.classList.remove('open');
      }
    });
  }
  // Button 1: "Click me" (first button)
  // (No longer needed for hamburger, so do nothing here)

  // Button 2: "Show Alert"
  const alertBtn = document.getElementById('alert-btn');
  if (alertBtn) {
    alertBtn.addEventListener('click', function() {
      alert('Click me');
    });
  }
});