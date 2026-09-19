import { useState } from 'react';

export default function RSVP() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('yes');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // { type: 'success'|'error', text }
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      setStatus({ type: 'error', text: 'Please enter your name.' });
      return;
    }
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, attending, guests, message })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus({ type: 'success', text: 'Thank you! Your RSVP has been recorded.' });
      setName('');
      setMessage('');
      setGuests(1);
    } catch (err) {
      setStatus({ type: 'error', text: err.message || 'Could not submit RSVP. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="rsvp">
      <div className="eyebrow-flourish"><span>RSVP</span></div>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" />
        </div>

        <div>
          <label>Will you be attending?</label>
          <div className="rsvp-choice">
            <button type="button" className={attending === 'yes' ? 'active' : ''} onClick={() => setAttending('yes')}>Joyfully Accept</button>
            <button type="button" className={attending === 'no' ? 'active' : ''} onClick={() => setAttending('no')}>Regretfully Decline</button>
          </div>
        </div>

        {attending === 'yes' && (
          <div>
            <label htmlFor="guests">Number of Guests (including you)</label>
            <input id="guests" type="number" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} />
          </div>
        )}

        <div>
          <label htmlFor="message">Message for the couple (optional)</label>
          <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Your wishes for Aditya & Ananya..." />
        </div>

        <button className="btn filled" type="submit" disabled={submitting} style={{ alignSelf: 'center', marginTop: '6px' }}>
          {submitting ? 'Sending...' : 'Send RSVP'}
        </button>

        {status && <div className={`rsvp-status ${status.type}`}>{status.text}</div>}
      </form>
    </section>
  );
}
