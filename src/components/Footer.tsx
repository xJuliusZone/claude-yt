import { Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="logo" to="/">
            <span className="logo-icon">
              <Globe size={17} strokeWidth={2.5} />
            </span>
            <span>Voyago</span>
          </Link>
          <p>Destinos curados para viajeros que quieren comparar antes de reservar.</p>
        </div>
        <div className="footer-links">
          <a href="/#destinations">Destinos nacionales</a>
          <a href="/#international">Internacional</a>
          <a href="mailto:hola@voyago.example">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
