import { useEffect, useState } from 'react'
import logo from '../assets/kitkat-logo.png'
import './Header.css'

export default function Header() {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${stuck ? ' is-stuck' : ''}`}>
      <div className="shell header-inner">
        <a className="logo" href="#top" aria-label="Kit Kat — home">
          <img className="logo-img" src={logo} alt="Kit Kat" />
        </a>
      </div>
    </header>
  )
}
