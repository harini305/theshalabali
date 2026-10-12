/**
 * Line drawing of the Bodhi leaf from The Shala Bali logo, drawn stroke-by-stroke with GSAP DrawSVG.
 * Purely decorative vector ornament (not an image).
 */
export default function LeafLine({ className = '', hero = false }) {
  return (
    <svg className={className} viewBox="0 0 200 300" fill="none" aria-hidden="true" {...(hero ? { 'data-hero-draw': '' } : {})}>
      <path
        data-draw
        d="M100 8c-2 16 2 28 2 40 26-6 58 6 74 34 16 28 10 66-10 98-18 30-46 54-62 86-2 6-4 14-4 26-1-12-2-20-5-26-16-32-44-56-62-86C13 148 7 110 23 82 39 54 70 42 98 48"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path data-draw d="M101 48c-1 70 0 150-1 244" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {[80, 108, 136, 164, 192, 220].map((y, i) => (
        <g key={y}>
          <path data-draw d={`M101 ${y}c18-8 36-16 52-${26 - i * 2}`} stroke="currentColor" strokeWidth=".8" strokeLinecap="round" />
          <path data-draw d={`M100 ${y}c-18-8-36-16-52-${26 - i * 2}`} stroke="currentColor" strokeWidth=".8" strokeLinecap="round" />
        </g>
      ))}
      <path data-draw d="M10 132h46M144 132h46M14 150h38M148 150h38M18 168h34M150 168h32" stroke="currentColor" strokeWidth=".6" strokeLinecap="round" opacity=".55" />
    </svg>
  );
}
