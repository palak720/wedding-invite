import { useState } from 'react';

export default function DoorOverlay({ groomName, brideName }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  function handleTap() {
    setOpen(true);
    setTimeout(() => setHidden(true), 1450);
  }

  return (
    <div id="doorOverlay" className={[open ? 'open' : '', hidden ? 'hidden' : ''].join(' ').trim()}>
      <div className="door door-left"></div>
      <div className="door door-right"></div>
      <div className="door-center">
        <div className="door-om">ॐ</div>
        <div className="door-names">
          {groomName.split(' ')[0]} <span style={{ color: 'var(--gold-light)' }}>&amp;</span> {brideName.split(' ')[0]}
        </div>
        <button className="door-tap" onClick={handleTap}>TAP TO OPEN</button>
      </div>
    </div>
  );
}
