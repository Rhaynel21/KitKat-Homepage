import Header from './components/Header.jsx'
import FloatingChunks from './components/FloatingChunks.jsx'
import Hero from './components/Hero.jsx'
import GameShelf from './components/GameShelf.jsx'
import ChocolateWave from './components/ChocolateWave.jsx'
import FullscreenButton from './components/FullscreenButton.jsx'
import './styles/app.css'

export default function App() {
  // One screen, no scrolling. The logo sits inside the centred column with
  // the rest of the content, so there is no gap between it and the headline.
  return (
    <div className="stage">
      <FloatingChunks />
      <FullscreenButton />

      <main className="stage-main">
        <Header />
        <Hero />
        <GameShelf />
      </main>

      <footer className="stage-foot">
        <ChocolateWave />
      </footer>
    </div>
  )
}
