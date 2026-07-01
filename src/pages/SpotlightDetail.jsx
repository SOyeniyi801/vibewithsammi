import { useParams, Link, Navigate } from 'react-router-dom'
import spotlights from '../data/spotlights'
import '../styles/SpotlightDetail.css'

const imageModules = import.meta.glob('../assets/images/*', { eager: true, import: 'default' })
function resolveImg(filename) {
  if (!filename) return null
  const match = Object.entries(imageModules).find(([path]) => path.endsWith('/' + filename))
  return match ? match[1] : null
}

export default function SpotlightDetail() {
  const { slug } = useParams()
  const spot = spotlights.find((s) => s.slug === slug)

  if (!spot) return <Navigate to="/publication/spotlight" replace />

  return (
    <article className="spot-detail">

      {/* ══ HERO ════════════════════════════════════ */}
      <header className="spot-detail-hero">
        <div className="container">
          <Link to="/publication/spotlight" className="spot-detail-hero__back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            All Spotlights
          </Link>

          <span className="spot-detail-hero__eyebrow">Community Spotlight</span>
          <h1 className="spot-detail-hero__title">{spot.title}</h1>
          <p className="spot-detail-hero__sub">{spot.subheading}</p>

          <div className="spot-detail-hero__meta">
            <div className="spot-detail-hero__meta-item">
              <span className="spot-detail-hero__meta-label">Business</span>
              <span className="spot-detail-hero__meta-value">{spot.businessName}</span>
            </div>
            <div className="spot-detail-hero__meta-item">
              <span className="spot-detail-hero__meta-label">Featuring</span>
              <span className="spot-detail-hero__meta-value">{spot.ownerName}</span>
            </div>
            <div className="spot-detail-hero__meta-item">
              <span className="spot-detail-hero__meta-label">Location</span>
              <span className="spot-detail-hero__meta-value">{spot.location}</span>
            </div>
            <div className="spot-detail-hero__meta-item">
              <span className="spot-detail-hero__meta-label">Date</span>
              <span className="spot-detail-hero__meta-value">{spot.date}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ══ HERO IMAGE — full bleed ═════════════════ */}
      <div className="spot-detail-hero-img">
        {resolveImg('spotlight-coffee-1.jpg') ? (
          <img src={resolveImg('spotlight-coffee-1.jpg')} alt={spot.businessName} />
        ) : (
          <div className="spot-detail-hero-img__ph" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        )}
      </div>

      {/* ══ BODY ═════════════════════════════════════ */}
      <div className="spot-detail-body">
        <div className="container spot-detail-body__inner">

          {/* Opening paragraph — wide, sets the scene */}
          <p className="spot-detail-lead">
            {spot.excerpt} On a quiet corner in East Atlanta, a small coffee shop
            has become a gathering place for the city's Caribbean community —
            and a love letter to home, one cup at a time.
          </p>

          {/* Block 1: image left, text right */}
          <div className="spot-detail-block">
            <div className="spot-detail-img">
              {resolveImg('spotlight-coffee-2.jpg') ? (
                <img src={resolveImg('spotlight-coffee-2.jpg')} alt="" loading="lazy" />
              ) : (
                <div className="spot-detail-img__ph" aria-hidden="true" />
              )}
            </div>
            <div className="spot-detail-block__text">
              <p>
                Marlene Joseph opened the doors three years ago with a simple goal:
                bring the taste of home to a city far from where she grew up. Every
                bag of beans is sourced directly from growers back home, roasted
                small-batch, and brewed the way her grandmother taught her.
              </p>
              <p>
                What started as a single counter in a shared kitchen space has
                grown into a full storefront — but the heart of it hasn't changed.
              </p>
            </div>
          </div>

          {/* Pull quote */}
          <div className="spot-detail-quote">
            <p>"This isn't just a coffee shop. It's a piece of home I get to share with everyone who walks through the door."</p>
            <span>— {spot.ownerName}</span>
          </div>

          {/* Block 2: text left, image right */}
          <div className="spot-detail-block spot-detail-block--reverse">
            <div className="spot-detail-img">
              {resolveImg('spotlight-coffee-3.jpg') ? (
                <img src={resolveImg('spotlight-coffee-3.jpg')} alt="" loading="lazy" />
              ) : (
                <div className="spot-detail-img__ph" aria-hidden="true" />
              )}
            </div>
            <div className="spot-detail-block__text">
              <p>
                The shop has become more than a place to grab coffee. On weekend
                mornings, it's standing room only — regulars trading stories in
                Creole, first-time visitors discovering a new favorite drink, and
                a community finding a piece of itself reflected back.
              </p>
            </div>
          </div>

          {/* Two-image row */}
          <div className="spot-detail-duo">
            <div className="spot-detail-img">
              {resolveImg('spotlight-coffee-4.jpg') ? (
                <img src={resolveImg('spotlight-coffee-4.jpg')} alt="" loading="lazy" />
              ) : (
                <div className="spot-detail-img__ph" aria-hidden="true" />
              )}
            </div>
            <div className="spot-detail-img">
              {resolveImg('spotlight-coffee-5.jpg') ? (
                <img src={resolveImg('spotlight-coffee-5.jpg')} alt="" loading="lazy" />
              ) : (
                <div className="spot-detail-img__ph" aria-hidden="true" />
              )}
            </div>
          </div>

          {/* Closing paragraph */}
          <p className="spot-detail-closing">
            Caribbean Coffee Co. is open Tuesday through Sunday in East Atlanta.
            If you're in the neighborhood, stop in, say hello, and taste a little
            piece of home.
          </p>

        </div>
      </div>

      {/* ══ FOOTER LINKS ═════════════════════════════ */}
      <div className="spot-detail-footer">
        <div className="container spot-detail-footer__inner">
          <Link to="/publication/spotlight" className="btn btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            All Spotlights
          </Link>
          <Link to="/work-with-me" className="btn btn-gold">
            Nominate a Business
          </Link>
        </div>
      </div>

    </article>
  )
}
