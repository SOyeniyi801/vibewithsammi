import { Link } from 'react-router-dom'
import '../styles/MediaKit.css'

const imageModules = import.meta.glob('../assets/images/**/*', { eager: true, import: 'default' })
const videoModules = import.meta.glob('../assets/videos/*', { eager: true, import: 'default' })
function resolveImg(filename) {
  if (!filename) return null
  const match = Object.entries(imageModules).find(([path]) => path.endsWith('/' + filename))
  return match ? match[1] : null
}
function resolveVideo(filename) {
  if (!filename) return null
  const match = Object.entries(videoModules).find(([path]) => path.endsWith('/' + filename))
  return match ? match[1] : null
}

export default function MediaKit() {
  return (
    <div className="mk-page">

      {/* ══ HERO ════════════════════════════════════ */}
      <header className="mk-hero">
        <div className="mk-hero__bg">
          <img src={resolveImg('mediakit-hero.jpg')} alt="Sammi Oyeniyi" loading="eager" />
        </div>
        <div className="mk-hero__overlay" />
        <span className="mk-hero__kit-label">Media Kit &middot; 2026</span>
        <div className="container mk-hero__content">
          <div className="mk-hero__left">
            <h1>Sammi<br />Oyeniyi</h1>
            <p className="mk-hero__tagline">Event &amp; Festival Photographer &middot; Atlanta, GA</p>
          </div>
          <div className="mk-hero__right">
            <p>Contact</p>
            <a href="mailto:hello.vibewithsammi@gmail.com">hello.vibewithsammi@gmail.com</a>
            <a href="https://instagram.com/vibewithsammi" target="_blank" rel="noopener noreferrer">@vibewithsammi</a>
            <a href="https://vibewithsammi.com" target="_blank" rel="noopener noreferrer">vibewithsammi.com</a>
          </div>
        </div>
      </header>

      {/* ══ WHO I AM — dark ═════════════════════════ */}
      <section className="mk-section mk-section--dark">
        <div className="container">
          <span className="section-label">Background</span>
          <h2 className="mk-heading">Who I Am</h2>

          <div className="mk-about-grid">
            <div className="mk-about-body">
              <p>
                I'm Sammi, a <strong>Haitian and Nigerian event and festival
                photographer</strong> based in Atlanta. Originally from Brooklyn,
                I've spent the last five years embedded in Atlanta's creative,
                cultural, and tech communities, documenting the moments that matter.
              </p>
              <p>
                Over the past month alone I've shot <strong>8 events</strong>,
                delivering galleries of over 200 professionally edited images
                across festivals, community tournaments, nightlife, and cultural
                celebrations. I shoot with an editorial eye, candid, alive, and
                true to the energy of the room.
              </p>
              <p>
                My background in web design and visual storytelling means I
                understand how images live beyond the event: on social media,
                in press, in brand campaigns. I don't just deliver photos.
                I deliver assets.
              </p>
            </div>

            <div className="mk-creds">
              <div className="mk-cred">
                <span className="mk-cred__label">Based In</span>
                <span className="mk-cred__value">Atlanta, GA</span>
                <span className="mk-cred__sub">Originally from Brooklyn, NY. Haitian and Nigerian.</span>
              </div>
              <div className="mk-cred">
                <span className="mk-cred__label">Recent Media Passes</span>
                <span className="mk-cred__value">Lakoufet &middot; Tennis on the Block</span>
                <span className="mk-cred__sub">Official media coverage, June 2026</span>
              </div>
              <div className="mk-cred">
                <span className="mk-cred__label">Events Shot This Month</span>
                <span className="mk-cred__value">8 Events &middot; 200+ Images</span>
                <span className="mk-cred__sub">Festivals, community events, nightlife, cultural celebrations</span>
              </div>
              <div className="mk-cred">
                <span className="mk-cred__label">Deliverables</span>
                <span className="mk-cred__value">Edited Gallery &middot; Recap Video</span>
                <span className="mk-cred__sub">Online gallery + optional social-ready highlight video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ THROUGH THE LENS — light ════════════════ */}
      <section className="mk-section mk-section--light">
        <div className="container">
          <span className="section-label">The Work</span>
          <h2 className="mk-heading mk-heading--dark">Through the<br /><span className="accent">Lens</span></h2>
          <p className="mk-section-sub">
            Event coverage across Atlanta. Candid moments, real energy, editorial perspective.
          </p>

          {/* 6 portrait photos, 3x2 */}
          <div className="mk-gallery">
            {['mk-photo-1.jpg', 'mk-photo-2.jpg', 'mk-photo-3.jpg', 'mk-photo-4.jpg', 'mk-photo-5.jpg', 'mk-photo-6.jpg'].map((file, i) => (
              <div className="mk-photo" key={file}>
                <img src={resolveImg(file)} alt={`Event photography ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <Link to="/photography" className="btn btn-outline-dark mk-portfolio-link">
            View Full Portfolio
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ══ EVENT RECAPS — dark ═════════════════════ */}
      <section className="mk-section mk-section--dark">
        <div className="container">
          <span className="section-label">Content</span>
          <h2 className="mk-heading">Event<br /><span className="accent">Recaps</span></h2>
          <p className="mk-section-sub mk-section-sub--light">
            Social-ready highlight videos delivered within 24 to 48 hours of your event.
          </p>

          <div className="mk-video-grid">
            <div className="mk-video-card">
              <div className="mk-video-wrap">
                <video
                  src={resolveVideo('recap-1.mp4')}
                  controls
                  preload="none"
                  poster={resolveImg('mk-recap-1-poster.jpg')}
                  aria-label="Chef Showdown recap video"
                />
              </div>
              <div className="mk-video-label">
                <strong>Chef Showdown &middot; Chef Hope</strong>
                Atlanta, GA &middot; June 2026
              </div>
            </div>

            <div className="mk-video-card">
              <div className="mk-video-wrap">
                <video
                  src={resolveVideo('recap-2.mp4')}
                  controls
                  preload="none"
                  poster={resolveImg('mk-recap-2-poster.jpg')}
                  aria-label="Lakoufet recap video"
                />
              </div>
              <div className="mk-video-label">
                <strong>Lakoufet Recap Video</strong>
                Atlanta, GA &middot; June 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ THE NUMBERS — light ═════════════════════ */}
      <section className="mk-section mk-section--light">
        <div className="container">
          <span className="section-label">Reach</span>
          <h2 className="mk-heading mk-heading--dark">The Numbers</h2>
          <p className="mk-section-sub">
            A growing, engaged audience across platforms, with reach that
            consistently outperforms follower count.
          </p>

          <div className="mk-stats-grid">
            <div className="mk-stat">
              <div className="mk-stat__num">708<span>+</span></div>
              <div className="mk-stat__label">Instagram Followers</div>
              <div className="mk-stat__sub">18K+ views this month. Community over vanity.</div>
            </div>
            <div className="mk-stat">
              <div className="mk-stat__num">1<span>,</span>085<span>+</span></div>
              <div className="mk-stat__label">TikTok Followers</div>
              <div className="mk-stat__sub">Growing culture and lifestyle audience</div>
            </div>
            <div className="mk-stat">
              <div className="mk-stat__num">900<span>+</span></div>
              <div className="mk-stat__label">Site Visits</div>
              <div className="mk-stat__sub">In the past 3 days alone</div>
            </div>
            <div className="mk-stat">
              <div className="mk-stat__num">ATL<span>.</span></div>
              <div className="mk-stat__label">Primary Market</div>
              <div className="mk-stat__sub">Embedded in Atlanta's events, culture, and creative scene</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO'S WATCHING — dark ═══════════════════ */}
      <section className="mk-section mk-section--dark">
        <div className="container">
          <span className="section-label">Community</span>
          <h2 className="mk-heading">Who's Watching</h2>
          <p className="mk-section-sub mk-section-sub--light">
            A mixed audience that spans Atlanta's creative, cultural, and tech communities.
          </p>

          <div className="mk-audience-grid">
            <div className="mk-audience-card">
              <h4>Culture &amp; Entertainment</h4>
              <ul>
                <li>Event-goers, DJs, performers, and promoters</li>
                <li>Caribbean and African diaspora communities in Atlanta</li>
                <li>Festival attendees and nightlife regulars</li>
                <li>People who want to see themselves documented well</li>
              </ul>
            </div>
            <div className="mk-audience-card">
              <h4>Creative &amp; Tech Professionals</h4>
              <ul>
                <li>Black developers, designers, and founders</li>
                <li>Community builders and organizers</li>
                <li>Early-career professionals building in public</li>
                <li>Brands looking to reach Atlanta's creative class</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════ */}
      <div className="mk-cta">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Let's Work</p>
          <h2>Ready to<br /><span>Book a Shoot?</span></h2>
          <p>
            Event photography, festival coverage, recap videos, and custom
            packages. Let's talk about what your event needs.
          </p>
          <div className="mk-cta__buttons">
            <a href="mailto:hello.vibewithsammi@gmail.com" className="btn btn-gold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello.vibewithsammi@gmail.com
            </a>
            <Link to="/work-with-me" className="btn btn-outline">
              See Rates &amp; Packages
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
