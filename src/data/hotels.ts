import { destinations } from './destinations'

export type Hotel = {
  slug: string
  destinationSlug: string
  name: string
  city: string
  images: string[]
  description: string
  highlights: string[]
}

function slugify(s: string) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const hotelImages = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85',
]

export const hotels: Hotel[] = destinations.flatMap((dest, i) => [
  {
    slug: slugify(dest.hotel),
    destinationSlug: dest.slug,
    name: dest.hotel,
    city: dest.location,
    images: [
      hotelImages[i % hotelImages.length],
      hotelImages[(i + 1) % hotelImages.length],
      hotelImages[(i + 2) % hotelImages.length],
    ],
    description: `El hotel principal de la oferta en ${dest.location}. Instalaciones modernas, atención personalizada y una ubicación ideal para explorar el destino.`,
    highlights: ['Hotel de la oferta', 'Servicios completos', 'Ubicación privilegiada'],
  },
  {
    slug: slugify(`hotel vista ${dest.name}`),
    destinationSlug: dest.slug,
    name: `Vista ${dest.name}`,
    city: dest.location,
    images: [
      hotelImages[(i + 1) % hotelImages.length],
      hotelImages[(i + 2) % hotelImages.length],
      hotelImages[(i + 3) % hotelImages.length],
    ],
    description: `Alternativa con vistas destacadas en ${dest.location}. Ambiente tranquilo y espacios cuidados para una estadía cómoda.`,
    highlights: ['Ambiente relajado', 'Vistas al entorno', 'Buena relación precio-valor'],
  },
  {
    slug: slugify(`hotel central ${dest.name}`),
    destinationSlug: dest.slug,
    name: `Central ${dest.name}`,
    city: dest.location,
    images: [
      hotelImages[(i + 2) % hotelImages.length],
      hotelImages[(i + 3) % hotelImages.length],
      hotelImages[(i + 4) % hotelImages.length],
    ],
    description: `Opción céntrica en ${dest.location} para quienes priorizan ubicación y acceso fácil a los puntos de interés del destino.`,
    highlights: ['Ubicación central', 'Fácil acceso', 'Servicios esenciales'],
  },
])

export function getHotelsForDestination(slug: string | undefined) {
  return hotels.filter((h) => h.destinationSlug === slug)
}

export function getHotel(destinationSlug: string | undefined, hotelSlug: string | undefined) {
  return hotels.find((h) => h.destinationSlug === destinationSlug && h.slug === hotelSlug)
}
