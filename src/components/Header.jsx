import logo from '../assets/kitkat-logo.png'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <img className="logo-img" src={logo} alt="Kit Kat" width="281" height="178" />
    </header>
  )
}
