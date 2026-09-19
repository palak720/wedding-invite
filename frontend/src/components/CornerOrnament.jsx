// Decorative floral corner flourish, purely visual (aria-hidden).
// position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
export default function CornerOrnament({ position = 'top-left' }) {
  return (
    <svg
      className={`corner-ornament corner-${position}`}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4 4 C 20 4, 30 10, 30 24 C 30 34, 24 40, 14 40" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
      <path d="M4 4 C 4 20, 10 30, 24 30 C 34 30, 40 24, 40 14" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
      <circle cx="4" cy="4" r="3" fill="var(--gold)" />
      <path d="M14 4 q 10 -6 18 2" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.6" />
      <path d="M4 14 q -6 10 2 18" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}