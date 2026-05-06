export type Destination = {
  slug: string
  name: string
  location: string
  country: string
  image: string
  gallery: string[]
  shortDescription: string
  description: string
  hotel: string
  bestTime: string
  tripLength: string
  travelStyle: string
  highlights: string[]
  activities: string[]
}

export const destinations: Destination[] = [
  {
    slug: 'amazonas',
    name: 'Amazonas',
    location: 'Leticia',
    country: 'Colombia',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Selva profunda, ríos infinitos y la magia verde del Amazonas colombiano.',
    description:
      'Leticia es la puerta de entrada al Amazonas. Un destino para quienes buscan naturaleza pura, salidas en canoa por el río, avistamiento de fauna y el ritmo tranquilo de la selva. Ideal para desconectarse del ruido urbano.',
    hotel: 'Hotel Amazon',
    bestTime: 'Abril – Mayo 2026',
    tripLength: '3 noches para 2 personas',
    travelStyle: 'Naturaleza y selva',
    highlights: ['Río Amazonas', 'Selva tropical', 'Fauna exótica'],
    activities: ['Tour de selva', 'Navegación por el río', 'Avistamiento de fauna'],
  },
  {
    slug: 'la-guajira',
    name: 'La Guajira',
    location: 'Riohacha',
    country: 'Colombia',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Desierto caribeño, playas salvajes y cielos que no tienen fin.',
    description:
      'La Guajira combina lo improbable: mar caribeño cristalino y desierto árido en un mismo horizonte. Una experiencia sensorial única con bungalows frente al mar, comidas incluidas y el ritmo lento del norte colombiano.',
    hotel: 'Wayira Beach Bungalows',
    bestTime: 'Abril – Mayo 2026',
    tripLength: '3 noches · Oferta 2x1',
    travelStyle: 'Playa y desierto',
    highlights: ['Costa caribe', 'Bungalows frente al mar', 'Todo incluido'],
    activities: ['Descansar en la playa', 'Visitar Punta Gallinas', 'Atardecer en el desierto'],
  },
  {
    slug: 'santa-marta',
    name: 'Santa Marta',
    location: 'Magdalena',
    country: 'Colombia',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Caribe, Tayrona y resort. La trinidad perfecta del norte colombiano.',
    description:
      'Santa Marta es base ideal para quienes quieren playa caribeña, naturaleza cercana al Parque Tayrona y descanso en un resort con comidas incluidas. Uno de los destinos más completos de Colombia.',
    hotel: 'Hotel Mendihuaca Resort',
    bestTime: 'Abril – Junio 2026',
    tripLength: '3 noches · Oferta 2x1',
    travelStyle: 'Playa y naturaleza',
    highlights: ['Cerca de Tayrona', 'Resort todo incluido', 'Playa caribeña'],
    activities: ['Visitar el Parque Tayrona', 'Snorkel', 'Descansar en el resort'],
  },
  {
    slug: 'san-andres',
    name: 'San Andrés',
    location: 'Isla de San Andrés',
    country: 'Colombia',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Agua de siete colores y el Caribe más puro de Colombia.',
    description:
      'San Andrés es la isla caribeña colombiana por excelencia. Aguas turquesas de siete colores, ambiente relajado, cocteles al atardecer y hoteles con todo incluido. Un escape de isla para dos.',
    hotel: 'Hotel Cove San Andrés',
    bestTime: 'Abril – Julio 2026',
    tripLength: '3 noches · Oferta 2x1',
    travelStyle: 'Isla y playa',
    highlights: ['Mar de 7 colores', 'Hotel en la isla', 'Cocteles incluidos'],
    activities: ['Nadar en Johnny Cay', 'Buceo', 'Recorrido en lancha'],
  },
  {
    slug: 'girardot',
    name: 'Girardot',
    location: 'Cundinamarca',
    country: 'Colombia',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Clima cálido, piscina y descanso a solo horas de Bogotá.',
    description:
      'Girardot es la escapada perfecta de fin de semana desde Bogotá. Clima cálido garantizado, resort con zonas de piscina, comidas incluidas y un ritmo lento para recargar energías sin tomar un vuelo.',
    hotel: 'Girardot Resort & Spa',
    bestTime: 'Abril – Junio 2026',
    tripLength: '2 noches para 2 personas',
    travelStyle: 'Escapada corta',
    highlights: ['Clima cálido', 'Resort con piscina', 'Comidas incluidas'],
    activities: ['Zona de piscinas', 'Descanso en el resort', 'Gastronomía local'],
  },
  {
    slug: 'punta-cana',
    name: 'Punta Cana',
    location: 'Bávaro',
    country: 'República Dominicana',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Arena blanca, resort todo incluido y el Caribe internacional.',
    description:
      'Punta Cana es la escapada internacional clásica: playas de arena blanca, aguas turquesas y resorts todo incluido. Perfecta para quienes quieren comodidad total sin complicaciones de logística.',
    hotel: 'Whala! Bávaro',
    bestTime: 'Temporada internacional',
    tripLength: '3–4 noches',
    travelStyle: 'Resort internacional',
    highlights: ['Playa caribeña', 'Resort todo incluido', 'Destino internacional'],
    activities: ['Paseo en catamarán', 'Explorar Bávaro', 'Deportes acuáticos'],
  },
  {
    slug: 'cancun',
    name: 'Cancún',
    location: 'Quintana Roo',
    country: 'México',
    image: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Zona hotelera, aguas turquesas y el mejor acceso al Caribe mexicano.',
    description:
      'Cancún es uno de los destinos internacionales más conectados desde Colombia. Zona hotelera a pasos del mar, tours a Isla Mujeres y Chichén Itzá, y una vida nocturna caribeña que no para.',
    hotel: 'Krystal Cancún',
    bestTime: 'Temporada internacional',
    tripLength: '3–4 noches',
    travelStyle: 'Playa y ciudad',
    highlights: ['Zona hotelera', 'Aguas turquesas', 'Tours arqueológicos'],
    activities: ['Isla Mujeres', 'Chichén Itzá', 'Snorkel en arrecifes'],
  },
  {
    slug: 'panama',
    name: 'Ciudad de Panamá',
    location: 'Ciudad de Panamá',
    country: 'Panamá',
    image: 'https://images.unsplash.com/photo-1571648773746-796e20abb2ea?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1571648773746-796e20abb2ea?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Skyline moderno, canal histórico y escapada urbana en vuelo corto.',
    description:
      'Ciudad de Panamá es el destino urbano internacional más cercano. Canal, Casco Viejo, compras duty free y un skyline sorprendente. Ideal para quienes quieren algo diferente a la playa.',
    hotel: 'El Panama by Faranda Grand',
    bestTime: 'Temporada internacional',
    tripLength: '3 noches',
    travelStyle: 'Escapada urbana',
    highlights: ['Canal de Panamá', 'Casco Viejo', 'Compras duty free'],
    activities: ['Tour al canal', 'Casco Antiguo', 'Free shopping'],
  },
  {
    slug: 'curacao',
    name: 'Curazao',
    location: 'Willemstad',
    country: 'Caribe Neerlandés',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85',
    ],
    shortDescription: 'Isla colorida, arrecifes de buceo y arquitectura holandesa en el Caribe.',
    description:
      'Curazao es una isla única: mezcla de Caribe y Europa con arquitectura holandesa de colores, playas cristalinas y algunos de los mejores arrecifes para bucear en el Caribe. Todo incluido disponible.',
    hotel: 'Kunuku Resort All Inclusive',
    bestTime: 'Temporada internacional',
    tripLength: '3–4 noches',
    travelStyle: 'Isla y cultura',
    highlights: ['Willemstad colorida', 'Buceo en arrecifes', 'Todo incluido'],
    activities: ['Explorar Willemstad', 'Snorkel y buceo', 'Playas del oeste'],
  },
]

export const nationalDestinations = destinations.filter(
  (d) => d.country === 'Colombia',
)

export const internationalDestinations = destinations.filter(
  (d) => d.country !== 'Colombia',
)

export function getDestination(slug: string | undefined) {
  return destinations.find((d) => d.slug === slug)
}
