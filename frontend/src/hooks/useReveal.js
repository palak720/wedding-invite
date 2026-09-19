import { useEffect, useRef, useState } from 'react';

// Fades + slides an element in the first time it scrolls into view.
// Usage: const [ref, visible] = useReveal();
//        <section ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}