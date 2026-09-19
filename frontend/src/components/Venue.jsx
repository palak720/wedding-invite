export default function Venue({ venue, calendarUrl }) {
  return (
    <section id="venue">
      <div className="eyebrow-flourish"><span>Venue</span></div>
      <div className="venue-name">{venue.name}</div>
      <div className="venue-addr">{venue.address}</div>
      <div className="btn-row">
        <a className="btn filled" href={calendarUrl} target="_blank" rel="noopener noreferrer">Add to Calendar</a>
        <a className="btn" href={venue.mapsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
      </div>
    </section>
  );
}
