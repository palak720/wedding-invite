export default function Family({ groom, bride }) {
  return (
    <section id="family">
      <div className="eyebrow-flourish"><span>Together with our families</span></div>
      <div className="family-row">
        <div className="family-block">
          <div className="family-role">The Groom</div>
          <div className="family-names">{groom.name}</div>
          <div className="family-parents">Son of {groom.parents}</div>
        </div>
        <div className="family-block">
          <div className="family-role">The Bride</div>
          <div className="family-names">{bride.name}</div>
          <div className="family-parents">Daughter of {bride.parents}</div>
        </div>
      </div>
    </section>
  );
}
