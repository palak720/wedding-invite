# Aditya & Ananya — Wedding Invitation (Full Stack)

A full-stack wedding invitation site:
- **Frontend:** React + Vite (door-open reveal, live countdown, event timeline, gallery, RSVP form)
- **Backend:** Node.js + Express, with RSVPs saved to a JSON file (`backend/data/rsvps.json`)

## Project structure
```
wedding-invite/
├── backend/
│   ├── server.js         # Express app entry point
│   ├── weddingInfo.js     # ← EDIT THIS: names, date, venue, events
│   ├── db.js              # simple file-based RSVP storage
│   ├── routes/rsvp.js     # POST /api/rsvp, GET /api/rsvp
│   └── data/rsvps.json    # RSVP submissions land here
└── frontend/
    ├── src/
    │   ├── App.jsx         # fetches wedding info, assembles the page
    │   ├── App.css         # all styling (colors, fonts, layout)
    │   └── components/     # Hero, Family, Countdown, Events, Gallery, Venue, RSVP, Footer...
    └── public/             # put music.mp3 and photos here
```

## How to run it locally

**1. Start the backend** (in one terminal):
```bash
cd backend
npm install
npm run dev
```
Runs on `http://localhost:4000`.

**2. Start the frontend** (in another terminal):
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5173` — open this in your browser. Vite proxies `/api/*` calls to the backend automatically.

## How to personalize

- **Names, date, venue, events:** edit `backend/weddingInfo.js` — the frontend pulls everything from this one file via the API, so you never touch component code for text changes.
- **Photos:** put image files in `frontend/public/`, then in `frontend/src/components/Gallery.jsx` replace the placeholder `<div>` with `<img src="/your-photo.jpg" alt="..." />`.
- **Music:** drop an mp3 at `frontend/public/music.mp3` — the note button (bottom-right) will play/pause it.
- **Colors/fonts:** all design tokens are CSS variables at the top of `frontend/src/App.css` (`--maroon`, `--gold`, `--serif`, etc.).

## RSVP data

Every submission is appended to `backend/data/rsvps.json` with a timestamp, name, attending status, guest count, and message. Visit `http://localhost:4000/api/rsvp` directly to see a JSON summary (total responses + attending headcount) — handy as a quick admin view.

## Deploying

- **Frontend:** `npm run build` in `frontend/` produces a static `dist/` folder — deploy it anywhere (Vercel, Netlify, etc.). Update the API base URL if the backend isn't on the same domain.
- **Backend:** deploy `backend/` to any Node host (Render, Railway, a VPS, etc.). For production, swap the JSON file storage in `db.js` for a real database (PostgreSQL/SQLite) — the `readAll()`/`insert()` interface is kept simple so this is a drop-in change.
