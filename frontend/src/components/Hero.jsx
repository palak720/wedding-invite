import { useEffect, useRef } from 'react';
import CornerOrnament from './CornerOrnament.jsx';
import MandalaWatermark from './MandalaWatermark.jsx';

export default function Hero({ groomName, brideName }) {
  const glowRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(-50%, ${window.scrollY * 0.18}px)`;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="dark">
      <div className="hero-bg-glow" ref={glowRef}></div>
      <MandalaWatermark />
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />
      <div className="inner">
        <div className="blessing">With the blessings of our elders</div>
        <h1 className="hero-names shimmer-text">
          {groomName.split(' ')[0]}
          <span className="hero-amp">&amp;</span>
          {brideName.split(' ')[0]}
        </h1>
        <div className="divider"></div>
        <div className="hero-sub">REQUEST THE PLEASURE OF YOUR COMPANY</div>
      </div>
    </section>
  );
}