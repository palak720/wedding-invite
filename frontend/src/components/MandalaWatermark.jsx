// Faint decorative mandala pattern used as a background watermark
// behind hero/footer text. Purely visual (aria-hidden).
const PETAL_COUNT = 12;
const petals = Array.from({ length: PETAL_COUNT });

export default function MandalaWatermark({ size = 480 }) {
  return (
    <svg
      className="mandala-watermark"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="90" fill="none" stroke="var(--gold)" strokeWidth="0.6" opacity="0.5" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="var(--gold)" strokeWidth="0.6" opacity="0.4" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="var(--gold)" strokeWidth="0.6" opacity="0.35" />
      {petals.map((_, i) => (
        <g key={i} transform={`rotate(${i * (360 / PETAL_COUNT)} 100 100)`}>
          <path d="M100 20 C 110 40, 110 60, 100 80 C 90 60, 90 40, 100 20 Z" fill="var(--gold)" opacity="0.12" />
        </g>
      ))}
    </svg>
  );
}