import { Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">
        <span className="logo-icon">
          <Globe size={18} strokeWidth={2.5} />
        </span>
        <span>Voyago</span>
      </Link>
      <nav className="nav">
        <a href="/#destinations">Destinos</a>
        <a href="/#international">Internacional</a>
        <a href="/#destinations" className="nav-cta">Explorar</a>
      </nav>
    </header>
  )
}
