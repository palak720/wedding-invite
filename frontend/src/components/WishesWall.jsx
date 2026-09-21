import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

export default function WishesWall({ refreshTrigger }) {
  const [ref, visible] = useReveal();
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    fetch('/api/rsvp/wishes')
      .then(res => res.json())
      .then(data => setWishes(data.wishes || []))
      .catch(() => {
        // Silently ignore — the wall just stays empty/hidden if the API isn't reachable.
      });
  }, [refreshTrigger]);

  if (wishes.length === 0) return null;

  return (
    <section id="wishes" ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
      <div className="eyebrow-flourish"><span>Wishes For Us</span></div>
      <div className="wishes-grid">
        {wishes.map((w, i) => (
          <div className="wish-card" key={i}>
            <div className="wish-message">&ldquo;{w.message}&rdquo;</div>
            <div className="wish-name">— {w.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}