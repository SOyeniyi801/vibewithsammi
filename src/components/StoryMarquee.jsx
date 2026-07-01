import { useEffect, useRef, useState } from 'react'
import '../styles/StoryMarquee.css'

const imageModules = import.meta.glob('../../assets/images/*', { eager: true, import: 'default' })
function resolveImg(filename) {
  const match = Object.entries(imageModules).find(([path]) => path.endsWith('/' + filename))
  return match ? match[1] : null
}

/**
 * StoryMarquee
 * Props:
 *   images {string[]} — exactly 6 filenames, resolved from src/assets/images/
 *
 * Track is duplicated once so the loop is seamless (no jump/restart).
 * Hovering pauses the scroll. Clicking an image opens the lightbox.
 */
export default function StoryMarquee({ images = [] }) {
  const trackRef = useRef(null)
  const [lbIndex, setLbIndex] = useState(null)

  // Duplicate the track for seamless looping
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const parent = track.parentElement
    const existing = parent.querySelector('[data-marquee-clone]')
    if (existing) existing.remove()
    const clone = track.cloneNode(true)
    clone.setAttribute('aria-hidden', 'true')
    clone.setAttribute('data-marquee-clone', 'true')
    parent.appendChild(clone)
  }, [images])

  const isOpen = lbIndex !== null
  const open  = (i) => setLbIndex(i)
  const close = ()  => setLbIndex(null)
  const prev  = ()  => setLbIndex((i) => (i - 1 + images.length) % images.length)
  const next  = ()  => setLbIndex((i) => (i + 1) % images.length)

  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <div className="story-marquee" role="region" aria-label="Photo gallery from the event">
        <div className="story-marquee__row">
          <div className="story-marquee__track" ref={trackRef}>
            {images.map((filename, i) => {
              const src = resolveImg(filename)
              return (
                <button
                  key={filename + i}
                  type="button"
                  className="story-marquee__item"
                  onClick={() => open(i)}
                  aria-label={`Open photo ${i + 1}`}
                >
                  {src ? (
                    <img src={src} alt="" loading="lazy" />
                  ) : (
                    <div className="story-marquee__ph" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="story-marquee-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={(e) => { if (e.target === e.currentTarget) close() }}
        >
          <button className="story-marquee-lightbox__close" onClick={close} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <button className="story-marquee-lightbox__arrow story-marquee-lightbox__arrow--prev" onClick={prev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <img
            src={resolveImg(images[lbIndex])}
            alt=""
            className="story-marquee-lightbox__img"
          />
          <button className="story-marquee-lightbox__arrow story-marquee-lightbox__arrow--next" onClick={next} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
