// Single source of truth for the invitation content.
// Edit these values to personalize the site — the frontend fetches this
// from the API, so you never have to touch frontend code for text changes.

module.exports = {
  couple: {
    groom: { name: 'Aditya Sharma', parents: 'Mr. Rajeev & Mrs. Sunita Sharma' },
    bride: { name: 'Ananya Verma', parents: 'Mr. Manoj & Mrs. Kavita Verma' }
  },
  weddingDateISO: '2026-12-12T11:00:00',
  weddingDateDisplay: '12th December, 2026 · Saturday',
  calendar: {
    startUTC: '20261212T053000Z',
    endUTC: '20261212T093000Z'
  },
  venue: {
    name: 'The Grand Palace Gardens',
    address: 'MG Road, Lucknow, Uttar Pradesh',
    mapsUrl: 'https://www.google.com/maps'
  },
  events: [
    { day: '10', name: 'Mehendi & Haldi', meta: '10 Dec · 4:00 PM onwards · Residence Lawn' },
    { day: '11', name: 'Sangeet Night', meta: '11 Dec · 7:00 PM onwards · Banquet Hall' },
    { day: '12', name: 'Wedding Ceremony', meta: '12 Dec · 11:00 AM Muhurat · Main Mandap' },
    { day: '12', name: 'Reception', meta: '12 Dec · 7:30 PM onwards · Grand Lawns' }
  ],
  story: [
    { date: 'August 2019', title: 'First Met', description: 'A chance meeting at a mutual friend\'s birthday party sparked an unexpected connection.' },
    { date: 'February 2022', title: 'Started Dating', description: 'What began as friendship slowly blossomed into something neither of them expected.' },
    { date: 'January 2026', title: 'The Proposal', description: 'A quiet evening turned into a moment neither of them will ever forget.' },
    { date: 'December 2026', title: 'Wedding Day', description: 'The beginning of forever, surrounded by the people they love most.' }
  ]
};