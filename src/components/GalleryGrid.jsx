import { useState } from 'react'
import '../styles/GalleryGrid.css'

/**
 * GalleryGrid
 *
 * Props:
 *   items {Array} — from src/data/gallery.js
 *
 * Each item: { id, type: 'image'|'video', shape: 'portrait'|'landscape'|'square',
 *              src, poster?, caption?, event? }
 *
 * Images and videos resolve from src/assets/images/ and src/assets/videos/
 * via Vite's import.meta.glob so the data file can stay plain JSON-like.
 */

// Eagerly import all images/videos so we can resolve by filename string
const imageModules = import.meta.glob('../assets/images/**/*', { eager: true, import: 'default' })
const videoModules = import.meta.glob('../assets/videos/**/*', { eager: true, import: 'default' })

function resolveSrc(filename, type) {
  const modules = type === 'video' ? videoModules : imageModules
  const match = Object.entries(modules).find(([path]) => path.endsWith('/' + filename))
  return match ? match[1] : null
}

export default function GalleryGrid({ items = [] }) {
  const [lbIndex, setLbIndex] = useState(null)

  const isOpen = lbIndex !== null
  const current = isOpen ? items[lbIndex] : null

  const open  = (i) => setLbIndex(i)
  const close = ()  => setLbIndex(null)
  const prev  = ()  => setLbIndex((i) => (i - 1 + items.length) % items.length)
  const next  = ()  => setLbIndex((i) => (i + 1) % items.length)

  const onKey = (e) => {
    if (!isOpen) return
    if (e.key === 'Escape')     close()
    if (e.key === 'ArrowLeft')  prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <>
      <div
        className="gallery-grid"
        role="list"
        aria-label="Photography gallery"
        onKeyDown={onKey}
      >
        {items.map((item, i) => {
          const src = resolveSrc(item.src, item.type)
          const posterSrc = item.poster ? resolveSrc(item.poster, 'image') : null

          return (
            <div
              key={item.id}
              className={`gallery-item gallery-item--${item.shape}`}
              role="listitem"
              tabIndex={0}
              aria-label={item.caption || item.event || `Gallery item ${i + 1}`}
              onClick={() => open(i)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && open(i)}
            >
              {item.type === 'video' ? (
                <div className="gallery-item__video-wrap">
                  <video
                    src={src}
                    poster={posterSrc || undefined}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0 }}
                  />
                  <span className="gallery-item__play" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  </span>
                </div>
              ) : (
                <img src={src} alt={item.caption || item.event || ''} loading="lazy" />
              )}

              <span className="gallery-item__hint" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </div>
          )
        })}
      </div>

      {isOpen && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
          onClick={(e) => { if (e.target === e.currentTarget) close() }}
        >
          <button className="gallery-lightbox__close" onClick={close} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {items.length > 1 && (
            <button className="gallery-lightbox__arrow gallery-lightbox__arrow--prev" onClick={prev} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <div className="gallery-lightbox__content">
            {current.type === 'video' ? (
              <video
                src={resolveSrc(current.src, 'video')}
                controls
                autoPlay
                playsInline
                className="gallery-lightbox__media"
              />
            ) : (
              <img
                src={resolveSrc(current.src, 'image')}
                alt={current.caption || current.event || ''}
                className="gallery-lightbox__media"
              />
            )}

            {(current.caption || current.event) && (
              <div className="gallery-lightbox__caption">
                {current.event && <span className="gallery-lightbox__event">{current.event}</span>}
                {current.caption && <span className="gallery-lightbox__text">{current.caption}</span>}
              </div>
            )}
          </div>

          {items.length > 1 && (
            <button className="gallery-lightbox__arrow gallery-lightbox__arrow--next" onClick={next} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  )
}
