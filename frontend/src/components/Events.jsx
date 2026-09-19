export default function Events({ events }) {
  return (
    <section id="events">
      <div className="eyebrow-flourish"><span>Celebration Schedule</span></div>
      <div className="event-list">
        {events.map((ev, i) => (
          <div className="event-item" key={i}>
            <div className="event-day">{ev.day}</div>
            <div>
              <div className="event-name">{ev.name}</div>
              <div className="event-meta">{ev.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
