import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

/* Top-level nav links. "Photography" carries a dropdown — see photoDropdown below. */
const links = [
  { label: 'About',           to: '/#about' },
  { label: 'Photography',     to: '/photography', dropdown: true },
  { label: 'Behind the Lens', to: '/publication' },
  { label: 'Work With Me',        to: '/work-with-me' },
  { label: 'Contact',         to: '/contact' },
]

const photoDropdown = [
  { label: 'Photography', desc: 'Portfolio & galleries', to: '/photography' },
  { label: 'I Caught Ya!', desc: 'Find your event photos', to: '/caught' },
]

export default function Navbar() {
  const [open,        setOpen]        = useState(false)
  const [hidden,      setHidden]      = useState(false)
  const [atTop,       setAtTop]       = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobilePhotoOpen, setMobilePhotoOpen] = useState(false)
  const lastY = useRef(0)
  const dropdownRef = useRef(null)
  const location = useLocation()

  /* Close drawer/dropdown on route change */
  useEffect(() => {
    setOpen(false)
    setDropdownOpen(false)
    setMobilePhotoOpen(false)
    document.body.style.overflow = ''
  }, [location])

  /* Hide/show nav on scroll */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setAtTop(y < 60)
      if (y > lastY.current && y > 60) setHidden(true)
      else setHidden(false)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close dropdown on outside click */
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  /* Lock body when drawer open */
  const toggleDrawer = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (open) { setOpen(false); document.body.style.overflow = '' }
      if (dropdownOpen) setDropdownOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, dropdownOpen])

  const navClass = [
    'navbar',
    atTop   ? 'navbar--top'    : '',
    hidden  ? 'navbar--hidden' : 'navbar--visible',
  ].filter(Boolean).join(' ')

  const isPhotoSectionActive =
    location.pathname === '/photography' || location.pathname === '/caught'

  return (
    <>
      <nav className={navClass} aria-label="Main navigation">
        <div className="container navbar__inner">

          <Link to="/" className="nav-logo" aria-label="Vibe With Sammi home">
            Vibe With <span>Sammi</span>
          </Link>

          {/* Desktop links */}
          <ul className="navbar__links" role="list">
            {links.map(({ label, to, dropdown }) => {
              if (to.startsWith('/#')) {
                return (
                  <li key={to}>
                    <a href={to} className="navbar__link">{label}</a>
                  </li>
                )
              }

              if (dropdown) {
                return (
                  <li
                    key={to}
                    className="navbar__dropdown"
                    ref={dropdownRef}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className={[
                        'navbar__link',
                        'navbar__dropdown-trigger',
                        isPhotoSectionActive ? 'navbar__link--active' : '',
                      ].join(' ')}
                      onClick={() => setDropdownOpen((v) => !v)}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {label}
                      <svg
                        width="10" height="10" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        className={['navbar__dropdown-chevron', dropdownOpen ? 'navbar__dropdown-chevron--open' : ''].join(' ')}
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    <div className={['navbar__dropdown-menu', dropdownOpen ? 'navbar__dropdown-menu--open' : ''].join(' ')}>
                      <div className="navbar__dropdown-menu-inner">
                        {photoDropdown.map((item) => (
                          <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                              ['navbar__dropdown-item', isActive ? 'navbar__dropdown-item--active' : ''].join(' ')
                            }
                          >
                            <span className="navbar__dropdown-item-label">{item.label}</span>
                            <span className="navbar__dropdown-item-desc">{item.desc}</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </li>
                )
              }

              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      ['navbar__link', isActive ? 'navbar__link--active' : ''].join(' ')
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              )
            })}
          </ul>


          {/* Hamburger */}
          <button
            className={['navbar__toggle', open ? 'navbar__toggle--open' : ''].join(' ')}
            onClick={toggleDrawer}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-drawer"
          >
            <span /><span /><span />
          </button>

        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="nav-drawer"
        className={['nav-drawer', open ? 'nav-drawer--open' : ''].join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <ul role="list">
          <li>
            <a
              href="/#about"
              className="nav-drawer__link"
              onClick={() => { setOpen(false); document.body.style.overflow = '' }}
            >
              About
            </a>
          </li>

          {/* Photography — expandable on mobile */}
          <li className="nav-drawer__group">
            <button
              type="button"
              className="nav-drawer__link nav-drawer__group-trigger"
              onClick={() => setMobilePhotoOpen((v) => !v)}
              aria-expanded={mobilePhotoOpen}
            >
              Photography
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                className={['nav-drawer__group-chevron', mobilePhotoOpen ? 'nav-drawer__group-chevron--open' : ''].join(' ')}
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={['nav-drawer__submenu', mobilePhotoOpen ? 'nav-drawer__submenu--open' : ''].join(' ')}>
              {photoDropdown.map((item) => (
                <NavLink key={item.to} to={item.to} className="nav-drawer__sublink">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </li>

          <li><NavLink to="/publication" className="nav-drawer__link">Behind the Lens</NavLink></li>
          <li><NavLink to="/contact" className="nav-drawer__link">Contact</NavLink></li>
        </ul>
        <div className="nav-drawer__meta">
          <p>Atlanta, GA</p>
          <a href="mailto:hello.vibewithsammi@gmail.com">hello.vibewithsammi@gmail.com</a>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="nav-backdrop"
          onClick={() => { setOpen(false); document.body.style.overflow = '' }}
          aria-hidden="true"
        />
      )}
    </>
  )
}