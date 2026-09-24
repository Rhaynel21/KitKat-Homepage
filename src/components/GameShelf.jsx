import PackShot from './PackShot.jsx'
import { games } from '../data/games.js'
import './GameShelf.css'

export default function GameShelf() {
  return (
    <section className="shelf" id="games">
      <div className="shell">
        <ul className="shelf-grid">
          {games.map((g) => {
            const ready = g.url && g.url !== '#'
            return (
              <li className="pack" key={g.id}>
                <a
                  className="pack-link"
                  href={g.url || '#'}
                  target={g.external ? '_blank' : undefined}
                  rel={g.external ? 'noreferrer' : undefined}
                  aria-disabled={ready ? undefined : 'true'}
                  aria-label={`Play ${g.game} — ${g.name}`}
                  onClick={ready ? undefined : (e) => e.preventDefault()}
                >
                  <span className="pack-stage">
                    <PackShot className="pack-art" variant={g.wrapper} isNew={g.isNew} />
                  </span>

                  <span className="pack-name">{g.name}</span>
                  <span className="pack-game">{g.game}</span>
                  <span className="pack-tagline">{g.tagline}</span>

                  <span className="pack-cta">{ready ? 'Play Now' : 'Coming Soon'}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
