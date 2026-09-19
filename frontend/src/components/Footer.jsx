export default function Footer({ groomName, brideName, dateShort }) {
  return (
    <section id="footer" className="dark">
      <div className="inner">
        <div className="footer-line">With love and gratitude, we invite you to be part of our celebration</div>
        <div className="footer-names">{groomName.split(' ')[0]} &amp; {brideName.split(' ')[0]}</div>
        <div className="footer-date">{dateShort}</div>
      </div>
    </section>
  );
}
