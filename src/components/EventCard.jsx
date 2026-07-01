import './EventCard.css'

/**
 * EventCard
 *
 * Props:
 *   name        {string}  — event name
 *   date        {string}  — display date e.g. "June 2026"
 *   description {string}  — one-line description
 *   thumb       {string}  — image src (optional)
 *   thumbAlt    {string}  — image alt
 *   href        {string}  — link (Google Drive gallery or story page)
 *   tag         {string}  — badge label e.g. "Event" (optional)
 *   external    {boolean} — open in new tab (default false)
 */
export default function EventCard({
  name,
  date,
  description,
  thumb,
  thumbAlt = '',
  href = '#',
  tag,
  external = false,
}) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a href={href} className="event-card" aria-label={`${name} — ${description}`} {...linkProps}>

      <div className="event-card__thumb">
        {thumb ? (
          <img src={thumb} alt={thumbAlt || name} loading="lazy" />
        ) : (
          <div className="event-card__thumb-ph" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
        )}
      </div>

      <div className="event-card__body">
        <div className="event-card__meta">
          {tag && <span className="event-card__tag">{tag}</span>}
          {date && <span className="event-card__date">{date}</span>}
        </div>
        <h3 className="event-card__name">{name}</h3>
        {description && <p className="event-card__desc">{description}</p>}
      </div>

      <svg
        className="event-card__arrow"
        width="18" height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M7 17L17 7M17 7H7M17 7v10"/>
      </svg>

    </a>
  )
}
