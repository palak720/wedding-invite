// Subtle continuous gold petals falling across the whole page.
// Purely decorative — pointer-events disabled so it never blocks clicks.

const PETAL_COUNT = 14;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const petals = Array.from({ length: PETAL_COUNT }, (_, i) => ({
  id: i,
  left: randomBetween(0, 100),
  duration: randomBetween(11, 21),
  delay: randomBetween(0, 16),
  size: randomBetween(6, 12),
  drift: randomBetween(-40, 40)
}));

export default function FallingPetals() {
  return (
    <div className="petals-layer" aria-hidden="true">
      {petals.map(p => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`
          }}
        />
      ))}
    </div>
  );
}