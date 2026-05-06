import { ArrowLeft, ArrowRight, BedDouble, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { getDestination } from '../data/destinations'
import { getHotelsForDestination, type Hotel } from '../data/hotels'

function HotelCard({ hotel, destSlug }: { hotel: Hotel; destSlug: string }) {
  const [imgIdx, setImgIdx] = useState(0)

  function prev(e: React.MouseEvent) {
    e.preventDefault()
    setImgIdx((i) => (i - 1 + hotel.images.length) % hotel.images.length)
  }

  function next(e: React.MouseEvent) {
    e.preventDefault()
    setImgIdx((i) => (i + 1) % hotel.images.length)
  }

  return (
    <div className="hotel-card-wrap">
      <div className="hotel-card-img">
        <Link to={`/destinos/${destSlug}/hoteles/${hotel.slug}`}>
          <img src={hotel.images[imgIdx]} alt={hotel.name} loading="lazy" />
        </Link>
        <div className="hotel-card-arrows">
          <button type="button" onClick={prev} aria-label="Imagen anterior">
            <ChevronLeft size={15} />
          </button>
          <button type="button" onClick={next} aria-label="Imagen siguiente">
            <ChevronRight size={15} />
          </button>
        </div>
        <div className="hotel-card-dots" aria-hidden="true">
          {hotel.images.map((_, i) => (
            <span key={i} className={i === imgIdx ? 'active' : ''} />
          ))}
        </div>
      </div>
      <div className="hotel-card-body">
        <span className="hotel-card-city">
          <MapPin size={13} />
          {hotel.city}
        </span>
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
        <div className="hotel-card-footer">
          <span>
            <BedDouble size={14} />
            Ver detalles
          </span>
          <Link to={`/destinos/${destSlug}/hoteles/${hotel.slug}`} className="hotel-card-link">
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function HotelsPage() {
  const { slug } = useParams()
  const dest = getDestination(slug)
  const hotels = getHotelsForDestination(slug)

  if (!dest) {
    return (
      <div className="page">
        <div className="container">
          <Header />
          <div className="not-found">
            <h1>Destino no encontrado</h1>
            <Link to="/" className="hero-btn" style={{ marginTop: '24px' }}>Volver</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Link className="back-link" to={`/destinos/${slug}`}>
          <ArrowLeft size={16} /> Volver a {dest.name}
        </Link>
      </div>

      <section className="section">
        <div className="container">
          <div className="hotels-head">
            <span className="kicker">
              <MapPin size={13} />
              {dest.location}, {dest.country}
            </span>
            <h1>Hoteles en {dest.location}</h1>
            <p>Compara opciones de hospedaje antes de reservar tu viaje a {dest.name}.</p>
          </div>

          <div className="hotels-grid">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.slug} hotel={hotel} destSlug={slug!} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
