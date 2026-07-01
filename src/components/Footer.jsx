import { Link } from 'react-router-dom'

const explore = [
  { label: 'Photography',     to: '/photography' },
  { label: 'Behind the Lens', to: '/publication' },
  { label: 'Work With Me',    to: '/work-with-me' },
  { label: 'I Caught Ya!',to: '/caught' },
  { label: 'Media Kit',       to: '/media-kit' },
]

const connect = [
  { label: 'Instagram',         href: 'https://instagram.com/vibewithsammi', external: true },
  { label: 'TikTok',            href: 'https://www.tiktok.com/@vibewithsammii', external: true },
  { label: 'Floye Creative Co.',href: 'https://www.floyecreative.co/', external: true },
  { label: 'hello.vibewithsammi@gmail.com', href: 'mailto:hello.vibewithsammi@gmail.com' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#04090F', borderTop: '1px solid rgba(175,194,213,0.07)' }}>
      <div className="container">
        <div className="footer-inner">

          <div className="footer-brand">
            <h3>Vibe With <span>Sammi</span></h3>
            <p>Event &amp; Festival Photographer · Atlanta, GA</p>
            <a
              href="mailto:hello.vibewithsammi@gmail.com"
              className="btn btn-ghost"
              style={{ fontSize: '12px', padding: '10px 22px', width: 'fit-content' }}
            >
              Say Hello
            </a>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links" role="list">
              {explore.map(({ label, to }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul className="footer-links" role="list">
              {connect.map(({ label, href, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Sammi Oyeniyi · Vibe With Sammi. All rights reserved.</p>
          <p>Made with intention in Atlanta, GA.</p>
        </div>
      </div>
    </footer>
  )
}