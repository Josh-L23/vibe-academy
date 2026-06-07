# Vibe Academy - Modular Implementation Strategy

This document outlines the strategy for building the `vibe-academy` website into a modular, scalable, and maintainable component-based architecture.

## Goals
- **Separation of Concerns**: Separate HTML structure, CSS styling, and JS logic.
- **Reusability**: Create components that can be used across multiple pages (e.g., Nav, Footer, Buttons).
- **Scalability**: Establish a structure that supports adding new pages and complex features without technical debt.
- **Maintainability**: Make it easy to find and update specific parts of the UI.

## Proposed Folder Structure

```text
/
├── index.html              # Main entry point
├── public/                 # Static assets
│   ├── assets/
│   │   ├── images/         # Photos and logos
│   │   └── fonts/          # Local font files (if any)
├── src/
│   ├── styles/             # Global styles
│   │   ├── main.css        # Entry style file imports everything
│   │   ├── variables.css   # CSS Variables (colors, fonts)
│   │   ├── base.css        # Reset, typography, global elements
│   │   └── utilities.css   # Helper classes (reveal, visible, etc.)
│   ├── js/                 # Global scripts
│   │   ├── main.js         # Entry JS file
│   │   ├── utils.js        # Shared helper functions (counters, formatters)
│   │   └── animations.js   # Global animations (ScrollReveal, Particles)
│   └── components/         # Reusable UI components
│       ├── nav/
│       │   ├── nav.html
│       │   ├── nav.css
│       │   └── nav.js
│       ├── hero/
│       │   ├── hero.html
│       │   ├── hero.css
│       │   └── hero.js (Canvas & Typewriter logic)
│       ├── stats/
│       ├── why-vibe/
│       ├── pillars/
│       ├── showcase/
│       ├── challenges/
│       ├── ai-hub/
│       ├── community/
│       ├── cta/
│       └── footer/
└── implementation.md       # This document
```

## Extraction Strategy

### 1. Global Styles & Variables
- Move all `:root` variables into `src/styles/variables.css`.
- Move resets (`*`, `body`, `html`) into `src/styles/base.css`.
- Extract common animations (`@keyframes`) into `src/styles/utilities.css`.

### 2. Component Isolation
For each logical section in the HTML:
- **HTML**: Extract the `<section>` or `<div>` into its own `.html` file (for reference or template-based loading).
- **CSS**: Extract the specific styles into a `component-name.css` file. Use scoped classes where possible.
- **JS**: Extract specific logic (e.g., the Hero Canvas, the Stats counters) into a `component-name.js` file.

### 3. Shared Logic Migration
- **Animations**: Move the `IntersectionObserver` logic (Scroll Reveal) and `progressBar` logic into `src/js/animations.js`.
- **Utilities**: Move `animateCounter` and card hover effects into `src/js/utils.js`.

### 4. Build System (Future Recommendation)
To scale this further, we should consider a simple build tool (like Vite or Webpack) or a static site generator (like Astro or Eleventy) to:
- Bundle CSS and JS.
- Handle HTML partials/includes.
- Optimize images.

## Component Breakdown

| Component | Responsibility | Key Features |
| :--- | :--- | :--- |
| **Nav** | Site navigation & branding | Glassmorphism, mobile toggle, progress bar |
| **Hero** | First impression & value prop | Particle canvas, typewriter effect, floating code |
| **Stats** | Social proof | Animated counters |
| **Why Vibe** | Core benefits | Responsive cards, hover tilt |
| **Pillars** | Foundation of community | Grid layout, tags |
| **Showcase** | Project exhibition | Image cards, likes/comments meta |
| **Challenges** | Gamification & building | Active challenge card, leaderboard |
| **AI Hub** | Resource sharing | Prompt boxes, tool chips |
| **Community** | Social interaction | Feed posts, avatars |
| **CTA** | Conversion | Primary button action |
| **Footer** | Secondary nav & links | Link columns, socials |

## Scaling for More Pages
- **Layouts**: Create a base layout that includes Nav and Footer, then inject page-specific content.
- **Dynamic Data**: Use the `schema.md` we designed to fetch data from Neon and populate components like `Showcase` and `Leaderboard` dynamically.
