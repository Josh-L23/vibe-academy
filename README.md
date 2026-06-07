# Vibe Academy ⚡

An AI-first community empowering African builders to learn, collaborate, and launch impactful products.

## Project Structure

- `index.html`: Main entry point (semantic HTML).
- `src/`: Frontend source code.
  - `components/`: Modular UI components (HTML/CSS/JS).
  - `styles/`: Global and base styles.
  - `js/`: Application logic and animations.
- `server/`: Node.js/Express backend.
  - `db/`: Database connection and queries (PostgreSQL/Neon).
- `schema.md`: PostgreSQL database schema definition.
- `seed.sql`: Sample data for the database.
- `implementation.md`: Documentation on the modular architecture.

## Getting Started

### 1. Installation

```bash
npm install
```

### 2. Database Setup

1. Create a project on [Neon](https://neon.tech).
2. Run the SQL from `schema.md` in the Neon SQL Editor.
3. (Optional) Run the SQL from `seed.sql` to populate sample data.
4. Create a `.env` file by copying `.env.example`:
   ```bash
   cp .env.example .env
   ```
5. Update `DATABASE_URL` in `.env` with your Neon connection string.

### 3. Development

Start the frontend development server (Vite):
```bash
npm run dev
```

Start the backend API server:
```bash
npm run server
```

## Features

- **Modular Architecture**: Easy to maintain and scale.
- **PostgreSQL/Neon Integration**: Real-time database for community data.
- **AI-First Design**: Built with modern builders in mind.
- **Responsive & Interactive**: High-performance UI with custom animations.
