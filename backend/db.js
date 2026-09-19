// Lightweight file-based storage for RSVPs — no native build tools required.
// Swap this out for PostgreSQL/SQLite later without touching the routes,
// as long as you keep the same readAll()/insert() interface.

const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'data', 'rsvps.json');

function ensureFile() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
  }
}

function readAll() {
  ensureFile();
  const raw = fs.readFileSync(DB_FILE, 'utf-8');
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function insert(entry) {
  const all = readAll();
  const record = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    createdAt: new Date().toISOString(),
    ...entry
  };
  all.push(record);
  fs.writeFileSync(DB_FILE, JSON.stringify(all, null, 2));
  return record;
}

module.exports = { readAll, insert };
