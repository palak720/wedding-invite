import { useEffect, useRef } from 'react';

export default function Lightbox({ photos, index, onClose, onChangeIndex }) {
  const touchStartX = useRef(null);
  const photo = photos[index];

  function goPrev() {
    onChangeIndex((index - 1 + photos.length) % photos.length);
  }
  function goNext() {
    onChangeIndex((index + 1) % photos.length);
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    }
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index]);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) goPrev();
    else if (diff < -50) goNext();
    touchStartX.current = null;
  }

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>

      <button
        className="lightbox-nav lightbox-prev"
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        aria-label="Previous photo"
      >‹</button>

      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img src={photo.src} alt={photo.caption} />
        <div className="lightbox-caption">{photo.caption}</div>
        <div className="lightbox-counter">{index + 1} / {photos.length}</div>
      </div>

      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        aria-label="Next photo"
      >›</button>
    </div>
  );
}