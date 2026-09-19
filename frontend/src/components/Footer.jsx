import { useReveal } from '../hooks/useReveal.js';
import CornerOrnament from './CornerOrnament.jsx';

export default function Footer({ groomName, brideName, dateShort }) {
  const [ref, visible] = useReveal();

  return (
    <section id="footer" ref={ref} className={`dark reveal ${visible ? 'visible' : ''}`}>
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />
      <div className="inner">
        <div className="footer-line">With love and gratitude, we invite you to be part of our celebration</div>
        <div className="footer-names shimmer-text">{groomName.split(' ')[0]} &amp; {brideName.split(' ')[0]}</div>
        <div className="footer-date">{dateShort}</div>
      </div>
    </section>
  );
}