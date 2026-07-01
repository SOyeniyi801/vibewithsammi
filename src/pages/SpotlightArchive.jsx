import { Link } from 'react-router-dom'
import spotlights from '../data/spotlights'
import '../styles/SpotlightArchive.css'

const imageModules = import.meta.glob('../assets/images/*', { eager: true, import: 'default' })
function resolveImg(filename) {
  const match = Object.entries(imageModules).find(([path]) => path.endsWith('/' + filename))
  return match ? match[1] : null
}

export default function SpotlightArchive() {
  return (
    <div className="spotlight-archive">

      {/* ══ HERO ════════════════════════════════════ */}
      <header className="spot-arch-hero">
        <div className="container">
          <span className="spot-arch-hero__eyebrow">Behind the Lens</span>
          <h1 className="spot-arch-hero__heading">
            Community<br /><span className="accent">Spotlight</span>
          </h1>
          <p className="spot-arch-hero__sub">
            Highlighting local Caribbean and African businesses, creatives, and
            the people building culture across Atlanta — one conversation at a time.
          </p>
          <Link to="/publication" className="spot-arch-hero__back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Behind the Lens
          </Link>
        </div>
      </header>

      {/* ══ ARCHIVE GRID ════════════════════════════ */}
      <section className="spot-arch-grid-section">
        <div className="container">
          <div className="spot-arch-grid">
            {spotlights.map((spot) => {
              const thumb = resolveImg(spot.thumb)
              const isLive = spot.status === 'live'

              const cardContent = (
                <>
                  <div className="spot-arch-card__thumb">
                    {thumb ? (
                      <img src={thumb} alt={spot.businessName} loading="lazy" />
                    ) : (
                      <div className="spot-arch-card__thumb-ph" aria-hidden="true">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                          <circle cx="12" cy="13" r="4" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="spot-arch-card__body">
                    <div className="spot-arch-card__meta">
                      <span className="spot-arch-card__tag">{isLive ? 'Spotlight' : 'Coming Soon'}</span>
                      <span className="spot-arch-card__date">{spot.date}</span>
                    </div>
                    <h3 className="spot-arch-card__business">{spot.businessName}</h3>
                    <p className="spot-arch-card__title">{spot.title}</p>
                    <p className="spot-arch-card__excerpt">{spot.excerpt}</p>
                    {isLive && (
                      <span className="spot-arch-card__read">
                        Read the Story
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </span>
                    )}
                  </div>
                </>
              )

              return isLive ? (
                <Link key={spot.id} to={`/publication/spotlight/${spot.slug}`} className="spot-arch-card">
                  {cardContent}
                </Link>
              ) : (
                <div key={spot.id} className="spot-arch-card spot-arch-card--soon">
                  {cardContent}
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
