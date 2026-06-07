/**
 * Initializes the scroll reveal animation for elements with the .reveal class.
 */
export function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => io.observe(el));
}

/**
 * Initializes the reading progress bar at the top of the page.
 */
export function initProgressBar() {
  const progressBar = document.getElementById('progressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const h = document.documentElement, b = document.body;
    const st = h.scrollTop || b.scrollTop;
    const sh = h.scrollHeight - h.clientHeight;
    progressBar.style.width = (st / sh * 100) + '%';
  });
}
