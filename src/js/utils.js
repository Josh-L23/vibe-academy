/**
 * Animates a counter from 0 to a target value.
 * @param {HTMLElement} el - The element to update.
 * @param {number} target - The target number.
 */
export function animateCounter(el, target) {
  let start = 0;
  const dur = 1600, step = 16;
  const inc = target / (dur / step);
  const timer = setInterval(() => {
    start += inc;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start).toLocaleString() + (target >= 1000 ? '+' : '');
  }, step);
}

/**
 * Initializes a subtle 3D tilt effect on cards.
 * @param {string} selector - CSS selector for the cards.
 */
export function initCardTilt(selector) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const cx = r.width / 2, cy = r.height / 2;
      const rx = (y - cy) / cy * 4, ry = -(x - cx) / cx * 4;
      card.style.transform = `translateY(-4px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.style.transition = 'transform .1s';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .3s';
    });
  });
}
