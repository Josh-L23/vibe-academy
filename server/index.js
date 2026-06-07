import express from 'express';
import dotenv from 'dotenv';
import * as db from './db/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API Routes

// Get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get leaderboard
app.get('/api/leaderboard', async (req, res) => {
  try {
    const result = await db.query('SELECT username, full_name, role_title, country, vibe_rank, points FROM users ORDER BY points DESC LIMIT 10');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get active challenge
app.get('/api/challenges/active', async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM challenges WHERE status = 'active' LIMIT 1");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
