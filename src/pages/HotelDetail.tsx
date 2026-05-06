import { ArrowLeft, BedDouble, CheckCircle2, ChevronLeft, ChevronRight, MapPin, Play, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { getDestination } from '../data/destinations'
import { getHotel } from '../data/hotels'

export default function HotelDetail() {
  const { slug, hotelSlug } = useParams()
  const dest = getDestination(slug)
  const hotel = getHotel(slug, hotelSlug)
  const [imgIdx, setImgIdx] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)

  if (!dest || !hotel) {
    return (
      <div className="page">
        <div className="container">
          <Header />
          <div className="not-found">
            <h1>Hotel no encontrado</h1>
            <Link to="/" className="hero-btn" style={{ marginTop: '24px' }}>Volver</Link>
          </div>
        </div>
      </div>
    )
  }

  function prev() { setImgIdx((i) => (i - 1 + hotel.images.length) % hotel.images.length) }
  function next() { setImgIdx((i) => (i + 1) % hotel.images.length) }

  const videoUrl = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(hotel.name + ' hotel')}`

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Link className="back-link" to={`/destinos/${slug}/hoteles`}>
          <ArrowLeft size={16} /> Ver más hoteles
        </Link>
      </div>

      <div className="container">
        <div className="detail-hero">
          {/* Left — info */}
          <div className="detail-info">
            <span className="kicker">
              <MapPin size={13} />
              {hotel.city}, {dest.country}
            </span>
            <h1>{hotel.name}</h1>
            <p className="detail-desc">{hotel.description}</p>
            <div className="hotel-highlights">
              {hotel.highlights.map((h) => (
                <div key={h} className="hotel-highlight-item">
                  <CheckCircle2 size={16} />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Video button */}
            <button className="hotel-video-btn" type="button" onClick={() => setVideoOpen(true)}>
              <span className="hotel-video-btn-icon"><Play size={15} fill="currentColor" /></span>
              Ver video del hotel
            </button>
          </div>

          {/* Right — carousel */}
          <div className="hotel-detail-carousel">
            <div className="hotel-detail-carousel-main">
              <img key={imgIdx} src={hotel.images[imgIdx]} alt={`${hotel.name} ${imgIdx + 1}`} />
              <div className="hotel-detail-carousel-arrows">
                <button type="button" onClick={prev} aria-label="Imagen anterior">
                  <ChevronLeft size={18} />
                </button>
                <button type="button" onClick={next} aria-label="Imagen siguiente">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="hotel-detail-thumbs">
              {hotel.images.map((src, i) => (
                <button
                  key={src}
                  className={`hotel-detail-thumb${i === imgIdx ? ' active' : ''}`}
                  onClick={() => setImgIdx(i)}
                  type="button"
                  aria-label={`Imagen ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>

            {/* Destino relacionado — below the carousel */}
            <div className="hotel-dest-info">
              <span className="kicker">Destino relacionado</span>
              <p>
                <BedDouble size={14} />
                {dest.name} — {dest.travelStyle}
              </p>
              <Link to={`/destinos/${slug}`} className="link-subtle">
                Ver destino completo →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="section section-soft">
        <div className="container">
          <div className="hotel-cta">
            <div>
              <span className="kicker">Explorar más</span>
              <h2>Más hoteles en {hotel.city}</h2>
              <p>Compara otras opciones de alojamiento para {dest.name}.</p>
            </div>
            <Link to={`/destinos/${slug}/hoteles`} className="hero-btn">
              Ver todos los hoteles
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Video modal */}
      {videoOpen && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={`Video de ${hotel.name}`}>
          <button className="video-backdrop" type="button" onClick={() => setVideoOpen(false)} />
          <div className="video-dialog">
            <button className="video-close" type="button" onClick={() => setVideoOpen(false)} aria-label="Cerrar">
              <X size={18} />
            </button>
            <iframe
              src={videoUrl}
              title={`Video de ${hotel.name}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}
