// src/server.js
require('dotenv').config();           // optional: reads .env if present
const express = require('express');

const app = express();
app.use(express.json());

// root page (so "/" works on deploy)
app.get('/', (_req, res) => {
  res.send('Dataset Web API (Alpha). Try GET /api/hello');
});

// your hello route (exact payload you showed)
app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from Group 2 👋' });
});

// (optional) example protected route later
// const { checkApiKey } = require('./authMiddleware');
// app.use('/api/v1/movies', checkApiKey, moviesRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
