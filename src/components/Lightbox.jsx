import { useEffect, useCallback } from 'react'
import './Lightbox.css'

/**
 * Lightbox
 *
 * Props:
 *   images   {Array<{src, alt}>}  — all images
 *   index    {number|null}        — currently open index (null = closed)
 *   onClose  {function}
 *   onPrev   {function}
 *   onNext   {function}
 */
export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const isOpen = index !== null && index >= 0
  const current = isOpen ? images[index] : null

  /* Keyboard nav */
  const onKey = useCallback((e) => {
    if (!isOpen) return
    if (e.key === 'Escape')     onClose()
    if (e.key === 'ArrowLeft')  onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [isOpen, onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onKey])

  /* Lock scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* Touch swipe */
  let touchX = 0
  const onTouchStart = (e) => { touchX = e.changedTouches[0].clientX }
  const onTouchEnd   = (e) => {
    const dx = e.changedTouches[0].clientX - touchX
    if (Math.abs(dx) > 50) dx < 0 ? onNext() : onPrev()
  }

  if (!isOpen) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Close */}
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button className="lightbox__arrow lightbox__arrow--prev" onClick={onPrev} aria-label="Previous photo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
      )}

      {/* Image */}
      <div className="lightbox__img-wrap">
        <img src={current.src} alt={current.alt || ''} className="lightbox__img" />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button className="lightbox__arrow lightbox__arrow--next" onClick={onNext} aria-label="Next photo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <p className="lightbox__counter" aria-live="polite">
          {index + 1} / {images.length}
        </p>
      )}
    </div>
  )
}
