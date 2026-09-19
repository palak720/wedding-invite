import { useEffect, useRef, useState } from 'react';

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const audio = new Audio('/music.mp3');
    audio.loop = true;

    audio.addEventListener('error', () => {
      // Fires if /music.mp3 is missing, misnamed, or not a valid audio file.
      // Check the browser console (F12) for the exact reason.
      console.error(
        'Music failed to load from /music.mp3 — make sure the file exists at ' +
        'frontend/public/music.mp3 (exact name, lowercase) and is a valid mp3.'
      );
      setErrorMsg('music.mp3 not found or invalid — see console for details');
    });

    audioRef.current = audio;
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio.play()
      .then(() => {
        setPlaying(true);
        setErrorMsg(null);
      })
      .catch((err) => {
        console.error('Playback failed:', err);
        setErrorMsg('Could not play music — see console for details');
      });
  }

  return (
    <>
      <button id="musicToggle" title="Toggle music" onClick={toggle}>
        {playing ? '❚❚' : '♪'}
      </button>
      {errorMsg && (
        <div style={{
          position: 'fixed', bottom: 74, right: 20, zIndex: 50,
          background: 'var(--maroon-deep)', color: 'var(--gold-light)',
          fontSize: '.72rem', padding: '8px 12px', borderRadius: '4px',
          maxWidth: '220px', textAlign: 'right', fontFamily: 'var(--sans)',
          border: '1px solid var(--gold)'
        }}>
          {errorMsg}
        </div>
      )}
    </>
  );
}