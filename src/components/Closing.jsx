import './Closing.css'

const STEPS = [
  { n: '01', title: 'Take a break', copy: 'Five minutes is all it takes. No sign-up, no download.' },
  { n: '02', title: 'Snap a finger', copy: 'Pick one of the three packs. Each one opens a different game.' },
  { n: '03', title: 'Beat your score', copy: 'Play it again, climb the board, then get back to it.' },
]

export default function Closing() {
  return (
    <div className="closing">
      <section className="how" id="how">
        <div className="shell">
          <h2 className="closing-heading">How It Works</h2>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.n}>
                <span className="step-n">{s.n}</span>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-copy">{s.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="site-footer" id="shout">
        <div className="shell footer-inner">
          <div>
            <h2 className="closing-heading">Give Us A Shout</h2>
            <p className="footer-copy">
              Got an idea for the next game, or found something broken? Tell us and we will take a
              look.
            </p>
            <a className="footer-cta" href="mailto:hello@example.com">
              Say Hello
            </a>
          </div>

          <p className="footer-legal">
            A fan-made project. Not affiliated with Nestlé or Kit Kat.
          </p>
        </div>
      </footer>
    </div>
  )
}
