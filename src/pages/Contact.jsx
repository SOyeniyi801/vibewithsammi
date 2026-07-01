import '../styles/Contact.css'

const channels = [
  {
    id: 'email',
    label: 'Email',
    icon: 'mail',
    value: 'hello.vibewithsammi@gmail.com',
    desc: 'Collaborations, bookings, or just want to say hey, slide into the inbox.',
    cta: 'Send a Message',
    href: 'mailto:hello.vibewithsammi@gmail.com',
    external: false,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: 'instagram',
    value: '@vibewithsammi',
    desc: 'Day-to-day moments, photography, behind-the-scenes, and Atlanta life.',
    cta: 'Follow Along',
    href: 'https://instagram.com/vibewithsammi',
    external: true,
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    icon: 'tiktok',
    value: '@vibewithsammii',
    desc: 'Tech, design, creative experiments, and real life, watch it unfold on TikTok.',
    cta: 'Watch It Unfold',
    href: 'https://www.tiktok.com/@vibewithsammii',
    external: true,
  },
]

function ChannelIcon({ type }) {
  if (type === 'mail') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  }
  if (type === 'instagram') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  }
  // tiktok
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  )
}

export default function Contact() {
  return (
    <div className="contact-page">

      {/* ══ HERO ════════════════════════════════════ */}
      <header className="contact-hero">
        <div className="contact-hero__glow" aria-hidden="true" />
        <div className="container">
          <span className="section-label">Keep in Touch</span>
          <h1 className="contact-hero__heading">
            Say<br /><span className="contact-hero__heading-script">Hello.</span>
          </h1>
          <p className="contact-hero__sub">
            Find me on socials or slide into the inbox, always open to connecting.
          </p>
        </div>
      </header>

      {/* ══ FIND ME HERE ════════════════════════════ */}
      <section className="contact-channels">
        <div className="container">
          <h2 className="contact-channels__heading">
            Find Me <span className="accent">Here</span>
          </h2>

          <div className="contact-channels__grid">
            {channels.map((c, i) => (
              <a
                key={c.id}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="contact-card"
                style={{ '--delay': `${i * 80}ms` }}
              >
                <div className="contact-card__glow" aria-hidden="true" />
                <div className="contact-card__icon">
                  <ChannelIcon type={c.icon} />
                </div>
                <span className="contact-card__label">{c.label}</span>
                <span className="contact-card__value">{c.value}</span>
                <p className="contact-card__desc">{c.desc}</p>
                <span className="contact-card__cta">
                  {c.cta}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
