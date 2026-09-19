import { useEffect, useState } from 'react';

function getRemaining(targetDate) {
  const diff = Math.max(0, targetDate - new Date());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60)
  };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function Countdown({ dateISO, dateDisplay }) {
  const targetDate = new Date(dateISO);
  const [remaining, setRemaining] = useState(getRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getRemaining(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [dateISO]);

  return (
    <section id="countdown" className="dark">
      <div className="inner">
        <div className="blessing">Counting down to the big day</div>
        <div className="count-grid">
          <div className="count-unit"><div className="count-num">{pad(remaining.days)}</div><div className="count-label">DAYS</div></div>
          <div className="count-unit"><div className="count-num">{pad(remaining.hours)}</div><div className="count-label">HOURS</div></div>
          <div className="count-unit"><div className="count-num">{pad(remaining.mins)}</div><div className="count-label">MINUTES</div></div>
          <div className="count-unit"><div className="count-num">{pad(remaining.secs)}</div><div className="count-label">SECONDS</div></div>
        </div>
        <div className="count-date">{dateDisplay}</div>
      </div>
    </section>
  );
}
