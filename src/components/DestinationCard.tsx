import { ArrowRight, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Destination } from '../data/destinations'

export default function DestinationCard({ dest }: { dest: Destination }) {
  const images = dest.gallery.length > 0 ? dest.gallery : [dest.image]
  const [imgIdx, setImgIdx] = useState(0)

  function prev(e: React.MouseEvent) {
    e.preventDefault()
    setImgIdx((i) => (i - 1 + images.length) % images.length)
  }

  function next(e: React.MouseEvent) {
    e.preventDefault()
    setImgIdx((i) => (i + 1) % images.length)
  }

  return (
    <article className="dest-card">
      <div className="dest-card-img-wrap">
        <Link to={`/destinos/${dest.slug}`} className="dest-card-img-link">
          <img src={images[imgIdx]} alt={dest.name} loading="lazy" />
        </Link>

        {images.length > 1 && (
          <>
            <div className="dest-card-arrows">
              <button type="button" onClick={prev} aria-label="Imagen anterior">
                <ChevronLeft size={15} />
              </button>
              <button type="button" onClick={next} aria-label="Imagen siguiente">
                <ChevronRight size={15} />
              </button>
            </div>
            <div className="dest-card-dots" aria-hidden="true">
              {images.map((_, i) => (
                <span key={i} className={i === imgIdx ? 'active' : ''} />
              ))}
            </div>
          </>
        )}

        <span className="dest-card-badge">{dest.travelStyle}</span>
      </div>

      <div className="dest-card-body">
        <div className="dest-card-meta">
          <span>
            <MapPin size={13} />
            {dest.location}, {dest.country}
          </span>
          <span>
            <Clock size={13} />
            {dest.tripLength}
          </span>
        </div>
        <h3>{dest.name}</h3>
        <p>{dest.shortDescription}</p>
        <div className="dest-card-tags">
          {dest.highlights.slice(0, 2).map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
        <Link to={`/destinos/${dest.slug}`} className="dest-card-btn">
          Explorar destino <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  )
}
