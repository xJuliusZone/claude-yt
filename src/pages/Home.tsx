import DestinationCard from '../components/DestinationCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { internationalDestinations, nationalDestinations } from '../data/destinations'

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <Header />
      </div>

      <div className="container">
        <Hero />
      </div>

      {/* National */}
      <section className="section" id="destinations">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Colombia</span>
              <h2>Destinos nacionales</h2>
              <p>Playas, selva, desierto y resort a pocas horas de vuelo desde cualquier ciudad colombiana.</p>
            </div>
          </div>
          <div className="card-grid">
            {nationalDestinations.map((d) => (
              <DestinationCard key={d.slug} dest={d} />
            ))}
          </div>
        </div>
      </section>

      {/* International */}
      <section className="section" id="international">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Internacional</span>
              <h2>Viajes internacionales</h2>
              <p>República Dominicana, México, Panamá, Curazao y más destinos fuera de Colombia.</p>
            </div>
          </div>
          <div className="card-grid">
            {internationalDestinations.map((d) => (
              <DestinationCard key={d.slug} dest={d} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <div className="container">
        <div className="cta-band">
          <div>
            <span className="kicker">¿Listo para explorar?</span>
            <h2>Encuentra tu próximo destino.</h2>
          </div>
          <a href="#destinations" className="hero-btn">
            Ver todos los destinos
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
