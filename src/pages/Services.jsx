import { Link } from 'react-router-dom'
import '../styles/Services.css'

const imageModules = import.meta.glob('../assets/images/*', { eager: true, import: 'default' })
function resolveImg(filename) {
  const match = Object.entries(imageModules).find(([path]) => path.endsWith('/' + filename))
  return match ? match[1] : null
}

export default function Services() {
  return (
    <div className="services-page">

      {/* ══ HERO ════════════════════════════════════ */}
      <header className="svc-hero">
        <div className="svc-hero__bg">
          <img src={resolveImg('services-hero.jpg')} alt="" loading="eager" />
        </div>
        <div className="svc-hero__overlay" />
        <div className="container svc-hero__content">
          <span className="svc-hero__eyebrow">Sammi Shot That &middot; Atlanta, GA</span>
          <h1>Work<br />With Me</h1>
          <p>
            Event and festival photography, social recap videos, and custom
            web design. Let's make your event impossible to forget.
          </p>
        </div>
      </header>

      {/* ══ WHY BOOK ME ═════════════════════════════ */}
      <section className="svc-section svc-section--dark">
        <div className="container">
          <span className="section-label">Why Book Me</span>

          <div className="svc-why__grid">
            <div className="svc-why__text">
              <h2>You need someone who<br /><span className="accent">gets the room.</span></h2>
              <p>
                I don't show up with a checklist. I show up knowing the energy
                of the space, the people in it, and the moments worth capturing
                before they happen. That's what 8 events in a month teaches you.
              </p>
              <p>
                My background in design means I think about how images land on
                social, in press kits, and in marketing materials. You get
                photos that work, not just photos that look good on a hard drive.
              </p>
            </div>

            <div className="svc-stats">
              <div className="svc-stat">
                <span className="svc-stat__num">8</span>
                <div>
                  <strong>Events shot this month</strong>
                  <span>Festivals, community events, nightlife, cultural celebrations</span>
                </div>
              </div>
              <div className="svc-stat">
                <span className="svc-stat__num">200+</span>
                <div>
                  <strong>Professionally edited images delivered</strong>
                  <span>High-res, gallery-ready, social-optimized</span>
                </div>
              </div>
              <div className="svc-stat">
                <span className="svc-stat__num">2</span>
                <div>
                  <strong>Official media passes</strong>
                  <span>Lakoufet World Cup Watch Party &middot; Tennis on the Block, June 2026</span>
                </div>
              </div>
              <div className="svc-stat">
                <span className="svc-stat__num">900+</span>
                <div>
                  <strong>Website visits in 3 days</strong>
                  <span>From business cards handed out at events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Single row, 4 images */}
          <div className="svc-strip">
            <div className="svc-strip__item">
              <img src={resolveImg('services-strip-1.jpg')} alt="Event coverage" loading="lazy" />
            </div>
            <div className="svc-strip__item">
              <img src={resolveImg('services-strip-2.jpg')} alt="Event coverage" loading="lazy" />
            </div>
            <div className="svc-strip__item">
              <img src={resolveImg('services-strip-3.jpg')} alt="Event coverage" loading="lazy" />
            </div>
            <div className="svc-strip__item">
              <img src={resolveImg('services-strip-4.jpg')} alt="Event coverage" loading="lazy" />
            </div>
          </div>

          <Link to="/photography" className="btn btn-outline svc-portfolio-link">
            View Full Portfolio
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ══ PACKAGES & PRICING ══════════════════════ */}
      <section className="svc-section svc-section--card">
        <div className="container">
          <span className="section-label">Rates</span>
          <h2 className="svc-pricing-heading">Packages &amp;<br /><span className="accent">Pricing</span></h2>
          <p className="svc-pricing-sub">
            Straightforward pricing. No surprises. Every package includes
            professionally edited, high-resolution images delivered in an
            online gallery.
          </p>

          <div className="svc-packages">

            <div className="svc-package">
              <h3>Event Photography</h3>
              <div className="svc-package__price">
                <span className="svc-package__from">Starting at</span>
                <span className="svc-package__amount">$200</span>
                <span className="svc-package__unit">/hour</span>
              </div>
              <p className="svc-package__desc">
                2-hour minimum. On-the-ground coverage with an editorial eye,
                candid, alive, and true to the energy of the room. Professionally
                edited, high-resolution images delivered in an online gallery.
              </p>
              <ul>
                <li>Birthdays &amp; celebrations</li>
                <li>Networking events &amp; launch parties</li>
                <li>Community &amp; cultural events</li>
                <li>Concerts at local venues</li>
                <li>Pop-ups, restaurant events &amp; weekly events</li>
                <li>High-res edited images in an online gallery</li>
              </ul>
            </div>

            <div className="svc-package">
              <h3>Corporate Events</h3>
              <div className="svc-package__price">
                <span className="svc-package__from">Starting at</span>
                <span className="svc-package__amount">$1,200</span>
              </div>
              <p className="svc-package__desc">
                Full professional coverage for high-stakes events. Polished,
                press-ready imagery delivered with fast turnaround and
                consistent quality your brand can count on.
              </p>
              <ul>
                <li>Conferences &amp; company events</li>
                <li>Galas &amp; awards ceremonies</li>
                <li>Brand activations &amp; corporate celebrations</li>
                <li>Team events</li>
                <li>High-res edited images in an online gallery</li>
                <li>Custom scope and deliverables on request</li>
              </ul>
            </div>

          </div>

          {/* Add-ons */}
          <div className="svc-addons">
            <h3>Add-Ons</h3>
            <div className="svc-addons__grid">
              <div className="svc-addon">
                <span className="svc-addon__price">$250<span>+</span></span>
                <strong>Content Recap Video</strong>
                <p>A social-ready highlight video delivered within 24 to 48 hours. Available as an add-on to any photography package. Pricing based on event duration, footage, and deliverable count.</p>
              </div>
              <div className="svc-addon">
                <span className="svc-addon__price">+$75</span>
                <strong>24-Hour Rush Delivery</strong>
                <p>Receive your fully edited gallery within 24 hours of the event.</p>
              </div>
              <div className="svc-addon">
                <span className="svc-addon__price">Varies</span>
                <strong>Travel Fee</strong>
                <p>Events outside the Atlanta metro area may incur a travel fee based on distance.</p>
              </div>
            </div>
            <p className="svc-addons__note">
              Every event is different. Final pricing is based on coverage needs,
              deliverables, and licensing requirements. Reach out and let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WEB DESIGN ══════════════════════════════ */}
      <section className="svc-section svc-section--dark">
        <div className="container">
          <span className="section-label">Also Available</span>

          <div className="svc-web__grid">
            <div className="svc-web__text">
              <h2>Need a site to<br /><span className="accent">match the vibe?</span></h2>
              <p>
                Beyond the camera, I'm also a web designer and developer.
                Through <strong>Floye Creative Co.</strong> I build custom websites
                for creatives, event organizers, and small businesses, fast,
                mobile-first, and built to represent your brand properly.
              </p>
              <p>
                Ask about package deals that combine event photography, recap
                video, and a custom website. One partner, one cohesive brand,
                one less thing to manage.
              </p>
              <ul className="svc-web__list">
                <li>Custom websites for events, brands, and creatives</li>
                <li>Photography + web design bundle packages available</li>
                <li>Mobile-first, fast, and built to last</li>
              </ul>
            </div>

            <div className="svc-bundle-card">
              <span className="svc-bundle-card__badge">Ask About This</span>
              <h3>The Full Package</h3>
              <p>
                Event photography, social recap video, and a custom website or
                landing page, everything your event or brand needs to show up
                professionally online. Custom quoted based on scope.
              </p>
              <a
                href="https://www.floyecreative.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline svc-bundle-card__btn"
              >
                View Web Design Work
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a
                href="mailto:hello.vibewithsammi@gmail.com?subject=Bundle%20Package%20Inquiry"
                className="btn btn-gold svc-bundle-card__btn"
              >
                Ask About a Bundle
              </a>
            </div>
          </div>

          {/* Quick callout pointing to Floye Creative directly */}
          <div className="svc-floye-callout">
            <p>
              Looking for web design services?{' '}
              <a href="https://www.floyecreative.co/" target="_blank" rel="noopener noreferrer">
                Check out Floye Creative Co.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════ */}
      <section className="svc-cta">
        <div className="container">
          <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Let's Talk</span>
          <h2>Ready to<br /><span className="accent">Book?</span></h2>
          <p>
            Send me the details about your event, date, location, what you
            need, and I'll get back to you within 24 hours.
          </p>
          <div className="svc-cta__buttons">
            <a href="mailto:hello.vibewithsammi@gmail.com?subject=Event%20Photography%20Inquiry" className="btn btn-gold">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello.vibewithsammi@gmail.com
            </a>
            <a href="https://instagram.com/vibewithsammi" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              DM on Instagram
            </a>
            <Link to="/media-kit" className="btn btn-outline">
              View Media Kit
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
