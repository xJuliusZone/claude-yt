import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Compass,
  MapPin,
} from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { getDestination } from '../data/destinations'

export default function DestinationDetail() {
  const { slug } = useParams()
  const dest = getDestination(slug)
  const [imgIndex, setImgIndex] = useState(0)

  if (!dest) {
    return (
      <div className="page">
        <div className="container">
          <Header />
          <div className="not-found">
            <h1>Destino no encontrado</h1>
            <Link to="/" className="hero-btn" style={{ marginTop: '24px' }}>
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Link className="back-link" to="/">
          <ArrowLeft size={16} /> Volver a destinos
        </Link>
      </div>

      {/* Hero split */}
      <div className="container">
        <div className="detail-hero">
          {/* Left — info */}
          <div className="detail-info">
            <span className="kicker">
              <MapPin size={13} />
              {dest.location}, {dest.country}
            </span>
            <h1>{dest.name}</h1>
            <p className="detail-desc">{dest.description}</p>

            <div className="detail-facts">
              <div>
                <CalendarDays size={16} />
                <span>Mejor fecha</span>
                <strong>{dest.bestTime}</strong>
              </div>
              <div>
                <Clock3 size={16} />
                <span>Duración</span>
                <strong>{dest.tripLength}</strong>
              </div>
              <div>
                <Compass size={16} />
                <span>Estilo</span>
                <strong>{dest.travelStyle}</strong>
              </div>
              <div>
                <BedDouble size={16} />
                <span>Hotel</span>
                <strong>{dest.hotel}</strong>
              </div>
            </div>

            <Link to={`/destinos/${slug}/hoteles`} className="hero-btn" style={{ marginTop: '28px' }}>
              Ver hoteles disponibles <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right — gallery */}
          <div className="detail-gallery">
            <div className="detail-gallery-main">
              <img
                key={imgIndex}
                src={dest.gallery[imgIndex]}
                alt={dest.name}
              />
              <div className="detail-gallery-controls">
                <button
                  type="button"
                  onClick={() => setImgIndex((i) => (i - 1 + dest.gallery.length) % dest.gallery.length)}
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setImgIndex((i) => (i + 1) % dest.gallery.length)}
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="detail-thumbs">
              {dest.gallery.map((src, i) => (
                <button
                  key={src}
                  className={`detail-thumb${i === imgIndex ? ' active' : ''}`}
                  onClick={() => setImgIndex(i)}
                  type="button"
                  aria-label={`Imagen ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Highlights & Activities */}
      <section className="section section-soft">
        <div className="container">
          <div className="detail-lists">
            <div className="detail-list-card">
              <span className="kicker">Puntos destacados</span>
              <ul>
                {dest.highlights.map((h) => (
                  <li key={h}>
                    <CheckCircle2 size={17} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="detail-list-card">
              <span className="kicker">Actividades recomendadas</span>
              <ul>
                {dest.activities.map((a) => (
                  <li key={a}>
                    <CheckCircle2 size={17} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hotel-cta">
            <div>
              <span className="kicker">Alojamiento</span>
              <h2>Hoteles en {dest.location}</h2>
              <p>Compara opciones de hospedaje para este destino antes de reservar.</p>
            </div>
            <Link to={`/destinos/${slug}/hoteles`} className="hero-btn">
              Ver hoteles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
