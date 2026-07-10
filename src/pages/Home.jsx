import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

import heroImg1   from '../assets/images/hero-1.jpg'
import heroImg2   from '../assets/images/hero-2.jpg'
import heroImg3   from '../assets/images/hero-3.jpg'
import heroImg4   from '../assets/images/hero-4.jpg'
import recentImg1 from '../assets/images/recent-1.jpg'
import recentImg2 from '../assets/images/recent-2.jpg'
import recentImg3 from '../assets/images/recent-3.jpg'
import recentImg4 from '../assets/images/recent-4.jpg'
import storyImg1  from '../assets/images/story-thumb.jpg'
import aboutImg from '../assets/images/about-me.jpg'
import storyImg2  from '../assets/images/story-thumb-2.jpg'

export default function Home() {
  return (
    <div className="home">

      {/* ══ HERO ════════════════════════════════════ */}
      <section className="hero">
        <div className="container">

          {/* Top row: headline left, body right */}
          <div className="hero__top">
            <div>
              <span className="section-label">Atlanta, GA · Est. 2026</span>
              <h1 className="hero__headline">
                Capturing Life<br />
                <span className="accent">in Motion</span>
              </h1>
            </div>
            <div className="hero__right">
              <p className="hero__sub">
                Sammi Oyeniyi — event and festival photographer, web designer,
                and visual storyteller rooted in Atlanta's Caribbean, African, and
                creative communities. Where culture shows up, the lens follows.
              </p>
              <div className="hero__actions">
                <Link to="/services" className="btn btn-outline-dark">
                  Work With Me
                </Link>
                <Link to="/photography" className="btn btn-gold">
                  Explore My Work
                </Link>
              </div>
            </div>
          </div>

          {/* Image grid */}
          <div className="hero__grid">
            <div className="hero__grid-item hero__grid-item--a">
              <img src={heroImg1} alt="" loading="eager" />
            </div>
            <div className="hero__grid-item hero__grid-item--b">
              <img src={heroImg2} alt="" loading="eager" />
            </div>
            <div className="hero__grid-item hero__grid-item--c">
              <img src={heroImg3} alt="" loading="eager" />
            </div>
            <div className="hero__grid-item hero__grid-item--d">
              <img src={heroImg4} alt="" loading="eager" />
            </div>
          </div>

        </div>
      </section>

      {/* ══ ABOUT ═══════════════════════════════════ */}
      <section className="about" id="about">
        <div className="container about__inner">

          <div className="about__photo">
            <img src={aboutImg} alt="Sammi Oyeniyi" loading="lazy" />
          </div>

          <div className="about__text">
            <span className="section-label">About Me</span>
            <h2 className="about__heading">
              Hey, I'm<br /><span className="accent">Sammi.</span>
            </h2>
            <p>
              I'm a Haitian-Nigerian event and festival photographer based in
              Atlanta, originally from Brooklyn. I shoot with an editorial eye —
              candid, alive, and true to the energy of the room.
            </p>
            <p>
              This past month I covered 8 events and delivered over 200
              professionally edited images. Beyond the camera, I'm also a web
              designer and developer through Floye Creative Co. — so I understand
              how images live beyond the event, on social, in press, and in brand
              campaigns.
            </p>
            <div className="about__actions">
              <Link to="/work-with-me" className="btn btn-gold">Book a Shoot</Link>
              <Link to="/media-kit" className="btn btn-outline-dark">Media Kit</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ══ FIND YOUR PHOTOS ════════════════════════ */}
      <section className="caught-strip">
        <div className="container caught-strip__inner">
          <div className="caught-strip__text">
            <span className="section-label">Were You There?</span>
            <h2>I might have<br /><span className="accent">caught you!</span></h2>
            <p>
              If I handed you a card at a recent event around Atlanta,
              your photos are waiting.
            </p>
          </div>
          <Link to="/caught" className="btn btn-gold">
            Find Your Photos
          </Link>
        </div>
      </section>

      {/* ══ RECENT SHOOTS ═══════════════════════════ */}
      <section className="recent">
        <div className="container">
          <div className="recent__header">
            <div>
              <span className="section-label">Galleries</span>
              <h2 className="recent__title">Recent Events<br /><span className="accent">&amp; Galleries</span></h2>
              <p className="recent__sub">
                Event coverage and full galleries — Atlanta scenes, big
                moments, and everything in between.
              </p>
            </div>
            <div className="recent__header-actions">
              <Link to="/photography" className="btn btn-outline-dark">
                View the Portfolio
              </Link>
              <Link to="/work-with-me" className="btn btn-gold">
                Work With Me
              </Link>
            </div>
          </div>

          <div className="recent__grid">
            <div className="recent__item recent__item--tall">
              <img src={recentImg1} alt="Recent event coverage" loading="lazy" />
            </div>
            <div className="recent__item recent__item--wide">
              <img src={recentImg2} alt="Recent event coverage" loading="lazy" />
            </div>
            <div className="recent__item">
              <img src={recentImg3} alt="Recent event coverage" loading="lazy" />
            </div>
            <div className="recent__item">
              <img src={recentImg4} alt="Recent event coverage" loading="lazy" />
            </div>
          </div>

        </div>
      </section>

      {/* ══ SERVICES ════════════════════════════════ */}
      <section className="services-strip">
        <div className="container services-strip__inner">
          <div className="services-strip__text">
            <span className="section-label">What I Offer</span>
            <h2>How We Can<br /><span className="accent">Work Together</span></h2>
            <p>
              From photography to web design, I'm here to
              help you tell your story.
            </p>
          </div>
          <Link to="/work-with-me" className="btn btn-ghost">
            View My Offerings
          </Link>
        </div>
      </section>

      {/* ══ STORIES ═════════════════════════════════ */}
      <section className="stories">
        <div className="container">
          <span className="section-label">Behind the Lens</span>
          <h2 className="stories__title">Stories from<br /><span className="accent">the Field</span></h2>

          <div className="stories__grid">
            <Link to="/publication/lakoufet" className="story-card">
              <div className="story-card__thumb">
                <img src={storyImg1} alt="Lakoufet World Cup Watch Party" loading="lazy" />
              </div>
              <div className="story-card__body">
                <p className="story-card__title">Lakoufet World Cup Watch Party</p>
                <p className="story-card__desc">
                  Haiti came to Atlanta for the World Cup and partied in the Lakou.
                </p>
                <span className="story-card__read">Read story</span>
              </div>
            </Link>

            <Link to="/publication/lakoufet" className="story-card">
              <div className="story-card__thumb">
                <img src={storyImg2} alt="Lakoufet World Cup Watch Party" loading="lazy" />
              </div>
              <div className="story-card__body">
                <p className="story-card__title">Atlanta Beltline Festival</p>
                <p className="story-card__desc">
                  A World Cup community festival welcoming the new south beltline path
                </p>
                <span className="story-card__read">Read story</span>
              </div>
            </Link>
          </div>

          {/* Community Spotlight callout */}
          <div className="spotlight-callout">
            <div className="spotlight-callout__text">
              <p className="spotlight-callout__label">Community Spotlight</p>
              <p>
                Learn more about local businesses across Atlanta's creative scene.
              </p>
            </div>
            <Link to="/publication" className="btn btn-outline-dark">
              Read the Latest Spotlight
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}