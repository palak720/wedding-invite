export default function Hero({ groomName, brideName }) {
  return (
    <section id="hero" className="dark">
      <div className="inner">
        <div className="blessing">With the blessings of our elders</div>
        <h1 className="hero-names">
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
