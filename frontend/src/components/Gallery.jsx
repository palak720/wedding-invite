import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import Lightbox from './Lightbox.jsx';

// Sample wedding photos (free-license stock photos from Pexels) so the
// gallery isn't empty out of the box. Swap these for your own photos:
// put files in frontend/public/photos/ and change 'src' below to
// '/photos/photo1.jpg' etc. Edit 'caption' to whatever fits each photo.
const PHOTOS = [
  { src: 'https://images.pexels.com/photos/19733687/pexels-photo-19733687.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Mehendi Day' },
  { src: 'https://images.pexels.com/photos/19734103/pexels-photo-19734103.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Our Engagement' },
  { src: 'https://images.pexels.com/photos/8565495/pexels-photo-8565495.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Sangeet Night' },
  { src: 'https://images.pexels.com/photos/32121489/pexels-photo-32121489.jpeg?auto=compress&cs=tinysrgb&w=1200', caption: 'Wedding Ceremony' }
];

function GalleryPhoto({ photo, onOpen }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="gallery-item">Add your photo here</div>;
  }

  return (
    <button type="button" className="gallery-item gallery-item-photo" onClick={onOpen}>
      <img src={photo.src} alt={photo.caption} onError={() => setFailed(true)} />
      <span className="gallery-caption">{photo.caption}</span>
    </button>
  );
}

export default function Gallery() {
  const [ref, visible] = useReveal();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section id="gallery" ref={ref} className={`dark reveal ${visible ? 'visible' : ''}`}>
      <div className="inner">
        <div className="eyebrow-flourish"><span>Our Moments</span></div>
        <div className="gallery-grid">
          {PHOTOS.map((photo, i) => (
            <GalleryPhoto photo={photo} key={i} onOpen={() => setLightboxIndex(i)} />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={PHOTOS}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={setLightboxIndex}
        />
      )}
    </section>
  );
}