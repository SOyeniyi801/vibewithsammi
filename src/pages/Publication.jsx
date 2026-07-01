import { Link } from 'react-router-dom'
import stories from '../data/stories'
import '../styles/Publication.css'

const imageModules = import.meta.glob('../assets/images/*', { eager: true, import: 'default' })
function resolveImg(filename) {
  const match = Object.entries(imageModules).find(([path]) => path.endsWith('/' + filename))
  return match ? match[1] : null
}

export default function Publication() {
  return (
    <div className="publication-page">

      {/* ══ HERO ════════════════════════════════════ */}
      <header className="pub-hero">
        <div className="container">
          <span className="section-label">The Publication</span>
          <h1 className="pub-hero__heading">
            Behind<br /><span className="accent">the Lens</span>
          </h1>
          <p className="pub-hero__sub">
            Event coverage and community spotlights from Atlanta's creative,
            Caribbean, and African diaspora scenes. The stories behind the shots.
          </p>
        </div>
      </header>

      {/* ══ COMMUNITY SPOTLIGHT — cutout callout ════ */}
      <section className="spotlight-section">
        <div className="container">
          <Link to="/publication/spotlight" className="spotlight-cutout">
            <div className="spotlight-cutout__fold" aria-hidden="true" />

            <div className="spotlight-cutout__image">
              {resolveImg('spotlight-cover.jpg') ? (
                <img src={resolveImg('spotlight-cover.jpg')} alt="Community Spotlight" loading="lazy" />
              ) : (
                <div className="spotlight-cutout__image-ph" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>
              )}
            </div>

            <div className="spotlight-cutout__body">
              <span className="spotlight-cutout__label">A Different Kind of Story</span>
              <h2 className="spotlight-cutout__title">Community<br />Spotlight</h2>
              <p className="spotlight-cutout__desc">
                Highlighting local Caribbean and African businesses, creatives,
                and the people building culture across Atlanta — one conversation
                at a time.
              </p>
              <span className="spotlight-cutout__cta">
                Explore the Series
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ══ STORIES GRID ════════════════════════════ */}
      <section className="stories-section">
        <div className="container">
          <span className="section-label">Event Coverage</span>
          <h2 className="stories-section__heading">
            All<br /><span className="accent">Stories</span>
          </h2>

          <div className="stories-grid">
            {stories.map((story) => {
              const thumb = resolveImg(story.thumb)
              const isLive = story.status === 'live'

              const cardContent = (
                <>
                  <div className="story-grid-card__thumb">
                    {thumb ? (
                      <img src={thumb} alt={story.title} loading="lazy" />
                    ) : (
                      <div className="story-grid-card__thumb-ph" aria-hidden="true">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                          <circle cx="12" cy="13" r="4" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="story-grid-card__body">
                    <div className="story-grid-card__meta">
                      <span className="story-grid-card__tag">{isLive ? story.tag : 'Coming Soon'}</span>
                      <span className="story-grid-card__date">{story.date}</span>
                    </div>
                    <h3 className="story-grid-card__title">{story.title}</h3>
                    <p className="story-grid-card__excerpt">{story.excerpt}</p>
                    {isLive && (
                      <span className="story-grid-card__read">
                        Read Story
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </span>
                    )}
                  </div>
                </>
              )

              return isLive ? (
                <Link key={story.id} to={`/publication/${story.slug}`} className="story-grid-card">
                  {cardContent}
                </Link>
              ) : (
                <div key={story.id} className="story-grid-card story-grid-card--soon">
                  {cardContent}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════ */}
      <section className="pub-cta">
        <div className="container pub-cta__inner">
          <div className="pub-cta__text">
            <span className="section-label">Want to Have Your Event Covered?</span>
            <h2>Let's tell<br /><span className="accent">your story.</span></h2>
          </div>
          <Link to="/work-with-me" className="btn btn-gold">Book Me</Link>
        </div>
      </section>

    </div>
  )
}
