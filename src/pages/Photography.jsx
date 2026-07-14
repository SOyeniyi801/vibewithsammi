import { Link } from 'react-router-dom'
import GalleryGrid from '../components/GalleryGrid'
import galleryItems from '../data/gallery'
import '../styles/Photography.css'

export default function Photography() {
  return (
    <div className="photography-page">

      {/* ══ PAGE HERO ═══════════════════════════════ */}
      <header className="photo-hero">
        <div className="container">
          <span className="section-label">Gallery</span>
          <h1 className="photo-hero__heading">
            Featured<br /><span className="accent">Work</span>
          </h1>
          <p className="photo-hero__sub">
            Event coverage, street details, portraits, and creative editorial.
            A look at what I bring to every shoot.
          </p>
        </div>
      </header>

      {/* ══ GALLERY ═════════════════════════════════ */}
      <section className="photo-gallery">
        <div className="container">
          <GalleryGrid items={galleryItems}/>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════ */}
      <section className="photo-cta">
        <div className="container photo-cta__inner">
          <div className="photo-cta__text">
            <span className="section-label">Let's Work</span>
            <h2>
              Ready to book<br /><span className="accent">your shoot?</span>
            </h2>
          </div>
          <div className="photo-cta__actions">
            <Link to="/work-with-me" className="btn btn-gold">Book Me</Link>
            <Link to="/caught" className="btn btn-outline">Find Your Photos</Link>
          </div>
        </div>
      </section>

    </div>
  )
}