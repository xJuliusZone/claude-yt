import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DestinationDetail from './pages/DestinationDetail'
import HotelDetail from './pages/HotelDetail'
import HotelsPage from './pages/HotelsPage'
import Home from './pages/Home'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos/:slug" element={<DestinationDetail />} />
        <Route path="/destinos/:slug/hoteles" element={<HotelsPage />} />
        <Route path="/destinos/:slug/hoteles/:hotelSlug" element={<HotelDetail />} />
      </Routes>
    </>
  )
}
