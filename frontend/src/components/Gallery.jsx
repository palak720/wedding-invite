import { useState } from 'react';

// Sample wedding photos (free-license stock photos from Pexels) so the
// gallery isn't empty out of the box. Swap these for your own photos:
// put files in frontend/public/photos/ and change the paths below to
// '/photos/photo1.jpg' etc.
const PHOTOS = [
  'https://images.pexels.com/photos/19733687/pexels-photo-19733687.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/19734103/pexels-photo-19734103.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/8565495/pexels-photo-8565495.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/32121489/pexels-photo-32121489.jpeg?auto=compress&cs=tinysrgb&w=800'
];

function GalleryPhoto({ src }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="gallery-item">Add your photo here</div>;
  }

  return (
    <div className="gallery-item gallery-item-photo">
      <img src={src} alt="Wedding moment" onError={() => setFailed(true)} />
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="dark">
      <div className="inner">
        <div className="eyebrow-flourish"><span>Our Moments</span></div>
        <div className="gallery-grid">
          {PHOTOS.map((src, i) => (
            <GalleryPhoto src={src} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
