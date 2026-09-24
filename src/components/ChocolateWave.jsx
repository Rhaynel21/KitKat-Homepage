import './ChocolateWave.css'

/** The melted-chocolate ridge that closes the red section. */
export default function ChocolateWave() {
  return (
    <div className="wave" aria-hidden="true">
      <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path
          className="wave-back"
          d="M0 118 C 120 66, 236 72, 330 116 C 424 160, 520 156, 610 108
             C 700 60, 806 64, 900 112 C 994 160, 1104 164, 1200 116
             C 1296 68, 1380 74, 1440 106 L1440 200 L0 200 Z"
        />
        <path
          className="wave-front"
          d="M0 152 C 130 104, 250 110, 348 150 C 446 190, 552 186, 646 146
             C 740 106, 860 110, 958 152 C 1056 194, 1180 190, 1280 150
             C 1350 122, 1400 124, 1440 140 L1440 200 L0 200 Z"
        />
      </svg>
    </div>
  )
}
