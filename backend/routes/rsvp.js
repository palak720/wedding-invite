const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /api/rsvp — guest submits their RSVP
router.post('/', (req, res) => {
  const { name, attending, guests, message } = req.body || {};

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Name is required.' });
  }
  if (!['yes', 'no'].includes(attending)) {
    return res.status(400).json({ error: 'attending must be "yes" or "no".' });
  }

  const guestCount = Number.isFinite(Number(guests)) ? Math.max(0, Math.floor(Number(guests))) : 1;

  const record = db.insert({
    name: name.trim(),
    attending,
    guests: guestCount,
    message: (message || '').toString().trim().slice(0, 500)
  });

  res.status(201).json({ ok: true, rsvp: record });
});

// GET /api/rsvp/wishes — public-safe list of guest wishes for the Wishes Wall
// (only name + message; no guest counts or attending status exposed here)
router.get('/wishes', (_req, res) => {
  const all = db.readAll();
  const wishes = all
    .filter(r => r.message && r.message.trim().length > 0)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map(r => ({ name: r.name, message: r.message, createdAt: r.createdAt }));

  res.json({ count: wishes.length, wishes });
});

// GET /api/rsvp — list all RSVPs (simple admin view)
router.get('/', (_req, res) => {
  const all = db.readAll();
  res.json({
    count: all.length,
    attendingCount: all.filter(r => r.attending === 'yes').reduce((sum, r) => sum + (r.guests || 1), 0),
    rsvps: all.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  });
});

module.exports = router;
