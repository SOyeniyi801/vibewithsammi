import { useParams, Link, Navigate } from 'react-router-dom'
import { getStoryBySlug } from '../data/storiesContent'
import StoryMarquee from '../components/StoryMarquee'
import '../styles/StoryPage.css'

const imageModules = import.meta.glob('../assets/images/**/*', { eager: true, import: 'default' })
function resolveImg(filename) {
  if (!filename) return null
  const match = Object.entries(imageModules).find(([path]) => path.endsWith('/' + filename))
  return match ? match[1] : null
}

function StoryImage({ filename, alt = '' }) {
  const src = resolveImg(filename)
  return (
    <div className="s-img">
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="s-img__ph" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
      )}
    </div>
  )
}

function renderBlock(block, i) {
  switch (block.type) {

    case 'imagePairQuote':
      return (
        <div className="s-block-1" key={i}>
      <StoryImage filename={block.image1} alt={block.image1Alt}/>
      <div className="s-block-1-right">
        <p className="s-quote">{block.quote}</p>
        <div className="s-quote-divider" />
        <p className="s-body-text">{block.paragraph}</p>
      </div>
    </div>
      )

    case 'imageDuo':
      return (
        <div className="s-block-2" key={i}>
          <div className="s-two-col">
            <StoryImage filename={block.image1} alt={block.image1Alt}/>
            <StoryImage filename={block.image2} alt={block.image2Alt}/>
          </div>
          {block.caption && <p className="s-caption">{block.caption}</p>}
        </div>
      )

    case 'quoteImageText':
      return (
        <div className="s-block-3" key={i}>
          <div className="s-block-3-quote">
          <p className="s-highlight-heading">{block.highlight}</p>
            <div className="s-quote-divider" />
          </div>
          <StoryImage filename={block.image} alt={block.imageAlt}/>
          <div>
            {block.paragraphs?.map((p, idx) => (
              <p className="s-body-text" key={idx} style={idx > 0 ? { marginTop: 16 } : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>
      )

    case 'imageHighlight':
      return (
        <div className="s-block-4" key={i}>
          <StoryImage filename={block.image} alt={block.imageAlt}/>
          <div>
            <p className="s-highlight-heading">{block.highlight}</p>
            <div className="s-quote-divider" style={{ marginBottom: 20 }} />
            <div>
            {block.paragraphs?.map((p, idx) => (
              <p className="s-body-text" key={idx} style={idx > 0 ? { marginTop: 16 } : undefined}>
                {p}
              </p>
            ))}
          </div>
          </div>
        </div>
      )

    default:
      return null
  }
}

export default function StoryPage() {
  const { slug } = useParams()
  const story = getStoryBySlug(slug)

  if (!story) return <Navigate to="/publication" replace />

  return (
    <article>

      {/* ══ STORY HERO ══════════════════════════════ */}
      <header className="story-hero">
        <div className="container">
          <div className="story-breadcrumb">
            <Link to="/publication">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              All Stories
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--gold)', letterSpacing: '0.18em' }}>{story.tag}</span>
          </div>

          <h1>{story.title}</h1>
          <p className="story-hero-subtitle">{story.kicker}</p>
          <p className="story-hero-sub">{story.intro}</p>
        </div>

        <div className="story-hero-img">
          <StoryImage filename={story.heroImage} alt={story.title} />
        </div>
      </header>

      {/* ══ META ROW ════════════════════════════════ */}
      <div className="story-meta-bar">
        <div className="container story-meta-grid">
          <div className="story-meta-item">
            <label>Photography</label>
            <p>{story.photography}</p>
          </div>
          <div className="story-meta-item">
            <label>Location</label>
            <p>{story.location}</p>
          </div>
          <div className="story-meta-item">
            <label>Date</label>
            <p>{story.date}</p>
          </div>
          <div className="story-meta-item">
            <label>Category</label>
            <p>{story.category}</p>
          </div>
        </div>
      </div>

      {/* ══ STORY BODY ══════════════════════════════ */}
      <div className="story-body">
        <div className="container">
          {story.blocks.map(renderBlock)}
        </div>
      </div>

      {/* ══ MARQUEE ═════════════════════════════════ */}
      <div className="container">
        <p className="story-gallery-label">From the Gallery</p>
      </div>
      <StoryMarquee images={story.marquee} />

      {/* ══ FOOTER LINKS ════════════════════════════ */}
      <div className="story-footer-links-wrap">
        <div className="container">
          <div className="story-footer-links">
            <div className="story-footer-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
              <span>
                View the full gallery from the event{' '}
                <a href={story.galleryUrl} target="_blank" rel="noopener noreferrer">here</a>
              </span>
            </div>

            {story.instagramHandle && (
              <div className="story-footer-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>
                  Follow on{' '}
                  <a href={story.instagramUrl} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>{' '}
                  to learn more about the community.
                </span>
              </div>
            )}

            <Link to="/publication" className="btn btn-ghost" style={{ width: 'fit-content', marginTop: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to All Stories
            </Link>
          </div>
        </div>
      </div>

    </article>
  )
}
