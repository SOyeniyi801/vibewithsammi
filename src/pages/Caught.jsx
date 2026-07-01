import { Link } from 'react-router-dom'
import events from '../data/events'
import '../styles/Caught.css'

const imageModules = import.meta.glob('../assets/images/*', { eager: true, import: 'default' })
function resolveImg(filename) {
  const match = Object.entries(imageModules).find(([path]) => path.endsWith('/' + filename))
  return match ? match[1] : null
}

export default function Caught() {
  return (
    <div className="caught-page">

      {/* ══ HERO ════════════════════════════════════ */}
      <header className="caught-hero">
        <div className="container">
          <span className="caught-hero__icon" aria-hidden="true">📸</span>
          <h1 className="caught-hero__heading">
            I Caught<br /><span className="accent">Ya!</span>
          </h1>
          <p className="caught-hero__sub">
            If I handed you this card, chances are I snapped a photo of you.
            Check the galleries below to find your moment.
          </p>
          <p className="caught-hero__note">
            Pics should be up 24–48 hours from the time of the event
          </p>
        </div>
      </header>

      {/* ══ RECENT EVENTS & GALLERIES ═══════════════ */}
      <section className="caught-galleries">
        <div className="container">
          <span className="section-label">Galleries</span>
          <h2 className="caught-galleries__heading">
            Recent Events<br /><span className="accent">&amp; Galleries</span>
          </h2>
          <p className="caught-galleries__sub">
            Event coverage and full galleries — Atlanta scenes, big
            moments, and everything in between.
          </p>

          <div className="caught-grid">
            {events.map((event) => {
              const thumb = resolveImg(event.thumb)
              return (
                <div key={event.id} className="caught-card">
                  <div className="caught-card__thumb">
                    {thumb ? (
                      <img src={thumb} alt={event.title} loading="lazy" />
                    ) : (
                      <div className="caught-card__thumb-ph" aria-hidden="true">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                          <circle cx="12" cy="13" r="4" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="caught-card__body">
                    <div className="caught-card__meta">
                      <span className="caught-card__tag">Event</span>
                      <span className="caught-card__date">{event.date}</span>
                    </div>
                    <h3 className="caught-card__title">{event.title}</h3>
                    <p className="caught-card__desc">{event.subtitle}</p>

                    <a
                      href={event.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold caught-card__btn"
                    >
                      View Gallery
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ WHILE YOU'RE HERE ═══════════════════════ */}
      <section className="while-here">
        <div className="container">
          <h2 className="while-here__title">While you're here...</h2>

          <div className="while-here__list">

            <Link to="/photography" className="while-here__item">
              <div className="while-here__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <div className="while-here__text">
                <strong>Browse My Work</strong>
                <span>Photography portfolio and event galleries</span>
              </div>
              <svg className="while-here__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>

            <a href="https://instagram.com/vibewithsammi" target="_blank" rel="noopener noreferrer" className="while-here__item">
              <div className="while-here__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="while-here__text">
                <strong>Follow on Instagram</strong>
                <span>@vibewithsammi</span>
              </div>
              <svg className="while-here__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            <Link to="/publication" className="while-here__item">
              <div className="while-here__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className="while-here__text">
                <strong>Read the Stories Behind the Moments</strong>
                <span>Behind the Lens — event coverage and community spotlights</span>
              </div>
              <svg className="while-here__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>

            <Link to="/contact" className="while-here__item">
              <div className="while-here__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="while-here__text">
                <strong>Need Event Coverage?</strong>
                <span>Let's connect</span>
              </div>
              <svg className="while-here__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>

          </div>
        </div>
      </section>

    </div>
  )
}
