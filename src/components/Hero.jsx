import barBreak from '../assets/bar-break.webp'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <h1 className="hero-title">Have A Break</h1>

      {/* Two clipped copies of the same photo. They start pivoted together
          so the bar reads as whole, then swing apart from the break. */}
      <div className="snap" role="img" aria-label="A Kit Kat bar snapping in two">
        <img className="snap-half snap-left" src={barBreak} alt="" aria-hidden="true" />
        <img className="snap-half snap-right" src={barBreak} alt="" aria-hidden="true" />
      </div>

      <p className="hero-sub">Have A Kit Kat</p>
      <p className="hero-tag">#MyBreak</p>
    </section>
  )
}
