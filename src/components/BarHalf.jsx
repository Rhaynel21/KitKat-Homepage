import { useId } from 'react'

// Wafer cross-section, top to bottom: coating, wafer, filling, ... , base.
const BANDS = [
  { y: 24, h: 6, fill: 'mid' },
  { y: 30, h: 8, fill: 'wafer' },
  { y: 38, h: 5, fill: 'light' },
  { y: 43, h: 8, fill: 'wafer' },
  { y: 51, h: 5, fill: 'light' },
  { y: 56, h: 8, fill: 'wafer' },
  { y: 64, h: 16, fill: 'mid' },
]

/**
 * One half of a snapped Kit Kat bar, drawn as SVG.
 * The break is on the right; pass `mirrored` to flip the geometry so it
 * faces left instead. The embossed label is drawn outside the flip so it
 * always reads the right way round.
 */
export default function BarHalf({ label = 'Kit', mirrored = false, className }) {
  const uid = useId().replace(/:/g, '')
  const topFace = `${uid}-top`
  const frontFace = `${uid}-front`
  const waferFill = `${uid}-wafer`
  const breakClip = `${uid}-break`

  const paint = { mid: 'var(--choc-mid)', light: 'var(--choc-light)', wafer: `url(#${waferFill})` }
  const labelX = mirrored ? 240 - 90 : 90

  return (
    <svg
      className={className}
      viewBox="0 0 240 96"
      role="img"
      aria-label={`Half of a snapped Kit Kat bar reading ${label}`}
    >
      <defs>
        <linearGradient id={topFace} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c08055" />
          <stop offset="100%" stopColor="#95552f" />
        </linearGradient>
        <linearGradient id={frontFace} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9a5a32" />
          <stop offset="50%" stopColor="#7b4425" />
          <stop offset="100%" stopColor="#552d17" />
        </linearGradient>
        <linearGradient id={waferFill} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2dcb5" />
          <stop offset="100%" stopColor="#cda86e" />
        </linearGradient>

        {/* Crumbly edge of the snap */}
        <clipPath id={breakClip}>
          <path d="M170 24 L199 27 L191 36 L204 45 L192 55 L203 65 L190 73 L197 80 L170 80 Z" />
        </clipPath>
      </defs>

      <g transform={mirrored ? 'translate(240,0) scale(-1,1)' : undefined}>
        {/* Top face, stopping at the break so the bar reads solid */}
        <path d="M6 24 L18 12 L180 12 L172 24 Z" fill={`url(#${topFace})`} />

        {/* Body */}
        <path d="M6 24 L172 24 L172 80 L12 80 Q6 80 6 74 Z" fill={`url(#${frontFace})`} />

        {/* Soft sheen across the face */}
        <path d="M6 28 L172 28 L172 34 L6 34 Z" fill="#c98a5c" opacity="0.16" />

        {/* Groove between the fingers */}
        <rect x="6" y="52" width="166" height="2" fill="#3f2011" opacity="0.28" />
        <rect x="6" y="54" width="166" height="1.5" fill="#b1794f" opacity="0.2" />

        {/* Snapped end: wafer layers behind a crumbly edge */}
        <g clipPath={`url(#${breakClip})`}>
          {BANDS.map((b) => (
            <rect key={b.y} x="168" y={b.y} width="44" height={b.h} fill={paint[b.fill]} />
          ))}
          <rect x="168" y="24" width="44" height="56" fill="#3a1d0f" opacity="0.1" />
        </g>

      </g>

      {/* Embossed wordmark, never mirrored */}
      <text
        x={labelX}
        y="48"
        textAnchor="middle"
        fontFamily="Anton, Impact, sans-serif"
        fontSize="26"
        fill="#3f2011"
        opacity="0.4"
      >
        {label}
      </text>
      <text
        x={labelX}
        y="46.5"
        textAnchor="middle"
        fontFamily="Anton, Impact, sans-serif"
        fontSize="26"
        fill="#ab7047"
        opacity="0.7"
      >
        {label}
      </text>
    </svg>
  )
}
