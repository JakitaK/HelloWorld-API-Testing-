// src/server.js
const express = require('express');
const app = express();

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from Group 2 👋' });
});

// NEW: make the homepage respond too
app.get('/', (_req, res) => {
  res.send('Dataset Web API (Alpha). Try GET /api/hello');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
