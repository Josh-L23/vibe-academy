import { initScrollReveal, initProgressBar } from './animations.js';
import { initCardTilt, animateCounter } from './utils.js';
import { initTypewriter, initFloatingCodes, initHeroCanvas } from '../components/hero/hero.js';

document.addEventListener('DOMContentLoaded', () => {
  // Global Animations
  initScrollReveal();
  initProgressBar();
  
  // Shared Utilities
  initCardTilt('.why-card, .project-card, .ai-card');
  
  // Hero Section Logic
  initTypewriter();
  initFloatingCodes();
  initHeroCanvas();

  // Stats Counter Logic
  const statIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-target]').forEach(n => {
          animateCounter(n, parseInt(n.dataset.target));
        });
        statIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stats-section').forEach(el => statIO.observe(el));
});
