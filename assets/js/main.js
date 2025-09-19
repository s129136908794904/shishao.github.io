document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-links a');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});
