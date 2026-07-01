import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

/* Pages */
import Home        from './pages/Home'
import Photography from './pages/Photography'
import Caught      from './pages/Caught'
import Publication from './pages/Publication'
import StoryPage   from './pages/StoryPage'
import SpotlightArchive  from './pages/SpotlightArchive'
import SpotlightDetail   from './pages/SpotlightDetail'
import Services  from './pages/Services'
import Contact     from './pages/Contact'
import MediaKit    from './pages/MediaKit'
// import NotFound    from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <Routes>
          <Route path="/"                            element={<Home />} />
          <Route path="/photography"                 element={<Photography />} />
          <Route path="/caught"                       element={<Caught />} />
          <Route path="/publication"                  element={<Publication />} />
          <Route path="/publication/spotlight"        element={<SpotlightArchive />} />
          <Route path="/publication/spotlight/:slug"  element={<SpotlightDetail />} />
          <Route path="/publication/:slug"            element={<StoryPage />} />
          <Route path="/services"                 element={<Services />} />
          <Route path="/contact"                      element={<Contact />} />
          <Route path="/media-kit"                    element={<MediaKit />} />
          {/* <Route path="*"                             element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}