// index.js
const express = require('express');
const app = express();
const PORT = 3000;

const quotes = [
  "Stay hungry, stay foolish.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Fix the cause, not the symptom.",
  "Make it work, make it right, make it fast."
];

app.get('/quote', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(`Quote sent: ${quote}`);
  res.json({ quote });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
