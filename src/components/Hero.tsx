import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const active = destinations[index]

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % destinations.length)
    }, 4500)
    return () => clearInterval(t)
  }, [])

  function prev() {
    setIndex((i) => (i - 1 + destinations.length) % destinations.length)
  }

  function next() {
    setIndex((i) => (i + 1) % destinations.length)
  }

  return (
    <section className="hero">
      {/* Left — copy */}
      <div className="hero-copy">
        <div className="hero-badge">
          <MapPin size={13} />
          9 destinos · temporada 2026
        </div>
        <h1>
          El mundo <br />
          está listo. <br />
          <span className="hero-highlight">¿Y tú?</span>
        </h1>
        <p>
          Destinos nacionales e internacionales con hoteles seleccionados,
          fechas claras y experiencias que valen el viaje.
        </p>
        <a href="#destinations" className="hero-btn">
          Ver destinos <ArrowRight size={16} />
        </a>

        <div className="hero-numbers">
          <div className="hero-num">
            <strong>9+</strong>
            <span>Destinos</span>
          </div>
          <div className="hero-num-divider" />
          <div className="hero-num">
            <strong>2026</strong>
            <span>Temporada</span>
          </div>
          <div className="hero-num-divider" />
          <div className="hero-num">
            <strong>100%</strong>
            <span>Curado</span>
          </div>
        </div>
      </div>

      {/* Right — carousel */}
      <div className="hero-carousel">
        <Link
          key={index}
          to={`/destinos/${active.slug}`}
          className="hero-card"
        >
          <img src={active.image} alt={active.name} />
          <div className="hero-card-overlay">
            <span className="hero-card-country">
              <MapPin size={12} />
              {active.location}, {active.country}
            </span>
            <strong className="hero-card-name">{active.name}</strong>
            <p className="hero-card-desc">{active.shortDescription}</p>
          </div>
        </Link>

        <div className="hero-carousel-footer">
          <div className="hero-dots">
            {destinations.map((_, i) => (
              <button
                key={i}
                className={`hero-dot${i === index ? ' active' : ''}`}
                onClick={() => setIndex(i)}
                type="button"
                aria-label={`Destino ${i + 1}`}
              />
            ))}
          </div>
          <div className="hero-arrows">
            <button type="button" onClick={prev} aria-label="Anterior">
              <ChevronLeft size={18} />
            </button>
            <button type="button" onClick={next} aria-label="Siguiente">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
