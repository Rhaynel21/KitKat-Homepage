import PackShot from './PackShot.jsx'
import { games } from '../data/games.js'
import './GameShelf.css'

export default function GameShelf() {
  return (
    <section className="shelf" id="games">
      <div className="shell">
        <p className="shelf-prompt">Tap a game to play</p>

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
                  aria-label={ready ? `Play ${g.game}` : `${g.game} — coming soon`}
                  onClick={ready ? undefined : (e) => e.preventDefault()}
                >
                  <span className="pack-stage">
                    {g.cover ? (
                      <img
                        className="pack-art pack-cover"
                        src={g.cover}
                        width="460"
                        height="818"
                        alt=""
                        aria-hidden="true"
                      />
                    ) : (
                      <PackShot className="pack-art" variant={g.wrapper} isNew={g.isNew} />
                    )}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
