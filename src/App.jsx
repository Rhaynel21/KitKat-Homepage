import Header from './components/Header.jsx'
import FloatingChunks from './components/FloatingChunks.jsx'
import Hero from './components/Hero.jsx'
import GameShelf from './components/GameShelf.jsx'
import ChocolateWave from './components/ChocolateWave.jsx'
import './styles/app.css'

export default function App() {
  // One screen, no scrolling: header, hero and the three games all fit.
  return (
    <div className="stage">
      <FloatingChunks />
      <Header />

      <main className="stage-main">
        <Hero />
        <GameShelf />
      </main>

      <footer className="stage-foot">
        <ChocolateWave />
      </footer>
    </div>
  )
}
