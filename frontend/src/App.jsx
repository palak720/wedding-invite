import { useEffect, useState } from 'react';
import DoorOverlay from './components/DoorOverlay.jsx';
import FallingPetals from './components/FallingPetals.jsx';
import Hero from './components/Hero.jsx';
import Family from './components/Family.jsx';
import OurStory from './components/OurStory.jsx';
import Countdown from './components/Countdown.jsx';
import Events from './components/Events.jsx';
import Gallery from './components/Gallery.jsx';
import Venue from './components/Venue.jsx';
import RSVP from './components/RSVP.jsx';
import WishesWall from './components/WishesWall.jsx';
import Footer from './components/Footer.jsx';
import MusicToggle from './components/MusicToggle.jsx';

export default function App() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [wishesRefreshKey, setWishesRefreshKey] = useState(0);

  useEffect(() => {
    fetch('/api/wedding-info')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load wedding info.');
        return res.json();
      })
      .then(setInfo)
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="loading-screen">
        Could not reach the server — make sure the backend is running on port 4000.
      </div>
    );
  }

  if (!info) {
    return <div className="loading-screen">Loading invitation...</div>;
  }

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `${info.couple.groom.name} & ${info.couple.bride.name} Wedding`
  )}&dates=${info.calendar.startUTC}/${info.calendar.endUTC}&details=${encodeURIComponent(
    'Wedding Ceremony'
  )}&location=${encodeURIComponent(info.venue.address)}`;

  const dateShort = new Date(info.weddingDateISO)
    .toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
    .replace(/\//g, ' \u00b7 ');

  return (
    <>
      <DoorOverlay groomName={info.couple.groom.name} brideName={info.couple.bride.name} />
      <FallingPetals />
      <Hero groomName={info.couple.groom.name} brideName={info.couple.bride.name} />
      <Family groom={info.couple.groom} bride={info.couple.bride} />
      <OurStory story={info.story} />
      <Countdown dateISO={info.weddingDateISO} dateDisplay={info.weddingDateDisplay} />
      <Events events={info.events} />
      <Gallery />
      <Venue venue={info.venue} calendarUrl={calendarUrl} />
      <RSVP onSubmitted={() => setWishesRefreshKey(k => k + 1)} />
      <WishesWall refreshTrigger={wishesRefreshKey} />
      <Footer groomName={info.couple.groom.name} brideName={info.couple.bride.name} dateShort={dateShort} />
      <MusicToggle />
    </>
  );
}