const express = require('express');
const cors = require('cors');
const weddingInfo = require('./weddingInfo');
const rsvpRoutes = require('./routes/rsvp');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Wedding content — the frontend fetches this on load
app.get('/api/wedding-info', (_req, res) => {
  res.json(weddingInfo);
});

app.use('/api/rsvp', rsvpRoutes);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Wedding invitation API running on http://localhost:${PORT}`);
});
