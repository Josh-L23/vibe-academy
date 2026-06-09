# Vibe Academy ⚡ Learn. Build. Launch.

Vibe Academy is an **AI-first community** specifically designed for the next generation of African builders. We bridge the gap between "learning to code" and "building impactful products" by leveraging AI as a force multiplier.

Our mission is to empower African developers, designers, and entrepreneurs to solve real-world problems—ranging from agricultural technology in Malawi to legal-tech in Nigeria—using the most advanced tools available.

## 🌟 The Vision: From Prompt to Product

In the era of AI, the barrier to building has never been lower. Vibe Academy focuses on teaching builders how to use AI tools (like Claude, Cursor, and ChatGPT) to accelerate the development lifecycle. We believe that building something real—even if imperfect—teaches more than any isolated course ever will.

## 🏗️ The Four Pillars

1.  **🧠 Intelligence Amplified (Learn)**: Master AI, software development, and design thinking as one integrated skill set.
2.  **🤝 Builders Together (Community)**: A judgment-free zone to ask questions, share discoveries, and get real feedback.
3.  **🚀 Ship Real Things (Build)**: Join monthly challenges and showcase your work. We prioritize impact over skill points.
4.  **🌍 Africa First (Impact)**: Every solution starts with a real problem in the African context—EdTech, AgriTech, FinTech, and beyond.

## 🚀 Key Features

-   **Project Showcase**: A curated gallery of products built by the community.
-   **Monthly Challenges**: Competitive sprints to solve specific regional problems.
-   **AI Hub**: A marketplace for battle-tested prompts, optimized workflows, and honest tool reviews.
-   **Community Feed**: A professional social layer for builders to share "wins," ask questions, and collaborate.
-   **Gamified Leaderboard**: Recognition for top contributors and builders across the continent.

---

## 🛠️ Technical Stack & Architecture

Vibe Academy is built with a modern, modular architecture designed for high performance and scalability.

-   **Frontend**: Vanilla HTML5/CSS3/JS (ES Modules) bundled with **Vite**.
-   **Backend**: **Node.js** & **Express** API.
-   **Database**: **PostgreSQL** hosted on **Neon** (Serverless Postgres).
-   **Architecture**: Modular component-based structure for reusable UI and clean logic.

## 🧪 3D Experiment (Feature Branch)

This project has been enhanced with a 3D Interactive section using **Spline**, **React**, and **Tailwind CSS**.

### New Tech Stack Additions
- **React 18**: Used for complex interactive UI components.
- **TypeScript**: Ensuring type safety across the new component library.
- **Tailwind CSS**: Utility-first styling integrated with existing CSS variables.
- **Spline**: Interactive 3D scenes.
- **Framer Motion**: Smooth animations and transitions.

### Component Structure
The project now follows a modern component structure:
- `src/components/ui/`: Contains reusable atomic components (Card, Spotlight, SplineScene).
- `src/main.tsx`: Entry point for React-based features.
- `lib/utils.ts`: Utility functions (e.g., `cn` for Tailwind class merging).

> **Note on `/components/ui`**: Following shadcn/ui conventions, atomic components are placed in `src/components/ui` to maintain a clean separation between feature-specific components and reusable UI primitives.

```text
/
├── index.html              # Main semantic entry point
├── src/                    # Frontend source
│   ├── components/         # Modular UI (Nav, Hero, AI-Hub, etc.)
│   ├── styles/             # Modular CSS (Variables, Base, Utils)
│   └── js/                 # ES Modules for logic & animations
├── server/                 # Express Backend
│   ├── db/                 # Neon Database connection
│   └── index.js            # API Routes
├── schema.md               # DB Schema & Design Rationale
├── seed.sql                # Initial community data
└── implementation.md       # Detailed refactoring strategy
```

## ⚙️ Getting Started

### 1. Prerequisites
-   Node.js (v18+)
-   A free [Neon](https://neon.tech) account.

### 2. Installation
```bash
npm install
```

### 3. Database Setup
1.  Create a project on **Neon**.
2.  Execute the SQL in `schema.md` via the Neon SQL Editor to create tables.
3.  Execute `seed.sql` to populate the platform with initial builders and projects.
4.  Create a `.env` file:
    ```bash
    cp .env.example .env
    ```
5.  Add your `DATABASE_URL` from the Neon dashboard to the `.env` file.

### 4. Running the App
**Frontend (Vite):**
```bash
npm run dev
```

**Backend (API):**
```bash
npm run server
```

---

## 🌍 Join the Movement
Vibe Academy is built in Africa, for Africa. ⚡
