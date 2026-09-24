import './FloatingChunks.css'

// Scattered chocolate pieces tumbling around the hero. Purely decorative:
// position, size, tilt and drift are baked in so the layout stays stable.
const CHUNKS = [
  { top: '6%', left: '3%', w: 118, rot: -24, dur: 13, delay: 0 },
  { top: '24%', left: '-2%', w: 96, rot: 38, dur: 16, delay: 1.4 },
  { top: '48%', left: '5%', w: 132, rot: -8, dur: 14, delay: 0.7 },
  { top: '70%', left: '1%', w: 88, rot: 22, dur: 18, delay: 2.1 },
  { top: '4%', left: '30%', w: 74, rot: 62, dur: 15, delay: 1.1 },
  { top: '10%', left: '88%', w: 126, rot: 18, dur: 12, delay: 0.4 },
  { top: '30%', left: '93%', w: 104, rot: -34, dur: 17, delay: 1.8 },
  { top: '56%', left: '86%', w: 140, rot: 14, dur: 15, delay: 0.2 },
  { top: '76%', left: '92%', w: 92, rot: -46, dur: 19, delay: 2.6 },
  { top: '88%', left: '20%', w: 80, rot: 30, dur: 16, delay: 1.5 },
]

export default function FloatingChunks() {
  return (
    <div className="chunks" aria-hidden="true">
      {CHUNKS.map((c, i) => (
        <span
          key={i}
          className="chunk"
          style={{
            top: c.top,
            left: c.left,
            width: `${c.w}px`,
            '--rot': `${c.rot}deg`,
            '--dur': `${c.dur}s`,
            '--delay': `${c.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
