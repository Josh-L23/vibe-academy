/**
 * Typewriter effect for the hero section.
 */
export function initTypewriter() {
  const words = ['Solutions.', 'Products.', 'Impact.', 'The Future.'];
  let wi = 0, ci = 0, deleting = false;
  const tw = document.getElementById('typewriter-text');
  if (!tw) return;

  function typeLoop() {
    const w = words[wi];
    if (!deleting) {
      tw.textContent = w.slice(0, ci + 1);
      ci++;
      if (ci === w.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      tw.textContent = w.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        setTimeout(typeLoop, 400);
        return;
      }
    }
    setTimeout(typeLoop, deleting ? 45 : 80);
  }
  setTimeout(typeLoop, 1200);
}

/**
 * Floating code snippets animation for the hero section.
 */
export function initFloatingCodes() {
  const snippets = [
    'const ai=new Claude();', 'await ai.complete(prompt)', 'npm run build',
    'git push origin main', 'const data=await fetch(api)', 'function solve(problem){',
    'useEffect(()=>{', 'SELECT * FROM builders', 'docker-compose up -d',
    'npx create-next-app', 'yarn add framer-motion', 'import{useState}from"react"',
    '<Component prop={value}/>', 'async function buildAfrica()', 'prisma.connect(db)',
    'tailwindcss --watch'
  ];
  const fc = document.getElementById('floatingCodes');
  if (!fc) return;

  function spawnSnippet() {
    const el = document.createElement('div');
    el.className = 'code-snippet';
    el.textContent = snippets[Math.floor(Math.random() * snippets.length)];
    el.style.left = Math.random() * 95 + '%';
    el.style.animationDuration = (20 + Math.random() * 20) + 's';
    el.style.animationDelay = (Math.random() * 5) + 's';
    el.style.fontSize = (0.55 + Math.random() * 0.25) + 'rem';
    fc.appendChild(el);
    setTimeout(() => el.remove(), 45000);
  }

  for (let i = 0; i < 8; i++) spawnSnippet();
  setInterval(spawnSnippet, 3000);
}

/**
 * Canvas particle background for the hero section.
 */
export function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let pts = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Pt {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r = Math.random() * 1.5 + 0.3;
      this.alpha = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245,166,35,${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 120; i++) pts.push(new Pt());

  function drawConnections() {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(245,166,35,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animCanvas);
  }
  animCanvas();
}
