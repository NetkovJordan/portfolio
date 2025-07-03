const menuToggle = document.getElementById('menu-toggle');
const sidebarNav = document.getElementById('sidebarNav');

// Toggle sidebar menu
function toggleMenu() {
  const isOpen = sidebarNav.classList.toggle('show');
  menuToggle.classList.toggle('active');
  sidebarNav.hidden = !isOpen;
  menuToggle.setAttribute('aria-expanded', isOpen);
}

// Close menu
function closeMenu() {
  sidebarNav.classList.remove('show');
  menuToggle.classList.remove('active');
  sidebarNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
}

// Click hamburger toggle
menuToggle.addEventListener('click', () => {
  toggleMenu();
});

// Allow toggling menu with keyboard (Enter or Space) on hamburger
menuToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

// Close menu when clicking any nav link
sidebarNav.querySelectorAll('a.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// Close menu when clicking outside sidebar (except on hamburger)
document.addEventListener('click', (e) => {
  if (
    sidebarNav.classList.contains('show') &&
    !sidebarNav.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    closeMenu();
  }
});

// Optional: close menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidebarNav.classList.contains('show')) {
    closeMenu();
  }
});

// Scroll-based appearance animation
const scrollElements = document.querySelectorAll(
  'section, #profile-image-container, .skill-badge, .nav-link'
);

// const observer = new IntersectionObserver((entries, observerRef) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       observerRef.unobserve(entry.target); // remove if you want animation only once
//     }
//   });
// }, {
//   threshold: 0.1,
// });

// scrollElements.forEach(el => observer.observe(el));

