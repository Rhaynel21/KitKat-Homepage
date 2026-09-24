import { useId } from 'react'
import logo from '../assets/kitkat-logo.png'

const THEMES = {
  milk: {
    base: '#e01f26',
    edge: '#a3141a',
    strapline: '4 Fingers',
    strapColor: '#ffffff',
    strip: '#ffd24a',
    footColor: 'rgba(255,255,255,.8)',
  },
  dark: {
    base: '#31201a',
    edge: '#170d09',
    strapline: 'Extra 70%',
    strapColor: '#e9c37a',
    strip: '#c9962f',
    footColor: 'rgba(233,195,122,.8)',
  },
  cookies: {
    base: '#f1e7d7',
    edge: '#cbb89c',
    strapline: 'Cookies & Cream',
    strapColor: '#6f3d21',
    strip: '#8b4f2c',
    footColor: 'rgba(111,61,33,.75)',
  },
}

/** Zig-zag crimp along one end of the wrapper. */
function crimp(x0, x1, yFlat, yTip, teeth) {
  const step = (x1 - x0) / teeth
  let d = `M${x0} ${yFlat}`
  for (let i = 0; i <= teeth; i += 1) {
    d += ` L${(x0 + i * step).toFixed(1)} ${i % 2 === 0 ? yTip : yFlat}`
  }
  return `${d} L${x1} ${yFlat} Z`
}

/** A stylised Kit Kat wrapper, seen flat on. */
export default function PackShot({ variant = 'milk', isNew = false, className }) {
  const t = THEMES[variant] ?? THEMES.milk
  const uid = useId().replace(/:/g, '')
  const sheen = `${uid}-sheen`

  return (
    <svg className={className} viewBox="0 0 170 240" role="presentation" aria-hidden="true">
      <defs>
        {/* A narrow highlight keeps the wrapper from looking like flat paper */}
        <linearGradient id={sheen} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000" stopOpacity="0.22" />
          <stop offset="16%" stopColor="#000" stopOpacity="0" />
          <stop offset="42%" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="62%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.24" />
        </linearGradient>
      </defs>

      {/* Crimped foil ends */}
      <path d={crimp(26, 144, 26, 8, 11)} fill={t.edge} />
      <path d={crimp(26, 144, 214, 232, 11)} fill={t.edge} />

      {/* Wrapper face */}
      <rect x="26" y="24" width="118" height="192" rx="3" fill={t.base} />


      {/* The logo artwork carries its own white oval, so it needs no plate. */}
      <g transform="rotate(-4 85 114)">
        <image
          href={logo}
          x="37"
          y="86"
          width="96"
          height="56"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      <text
        x="85"
        y="166"
        textAnchor="middle"
        fontFamily="Archivo, sans-serif"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="0.5"
        fill={t.strapColor}
      >
        {t.strapline}
      </text>

      <rect x="38" y="180" width="94" height="5" rx="2.5" fill={t.strip} />

      <text
        x="85"
        y="202"
        textAnchor="middle"
        fontFamily="Archivo, sans-serif"
        fontSize="10"
        fontWeight="600"
        letterSpacing="1"
        fill={t.footColor}
      >
        45g
      </text>

      {/* Shading over the whole wrapper */}
      <rect x="26" y="24" width="118" height="192" rx="3" fill={`url(#${sheen})`} />

      {/* "NEW" corner flash */}
      {isNew && (
        <g transform="rotate(-13 42 62)">
          <rect x="10" y="48" width="58" height="25" rx="2.5" fill="#ffd24a" />
          <text
            x="39"
            y="66"
            textAnchor="middle"
            fontFamily="Anton, Impact, sans-serif"
            fontSize="17"
            fill="#8b4f2c"
          >
            New
          </text>
        </g>
      )}
    </svg>
  )
}
