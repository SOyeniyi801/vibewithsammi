/**
 * Community Spotlight entries.
 * Add a new spotlight by copying a block. Set status to 'live' once the
 * full spotlight page content is written, otherwise 'soon' shows a dimmed card
 * on the archive page.
 *
 * slug: used for the route /publication/spotlight/:slug
 * thumb: filename in src/assets/images/ — used on the archive/cutout card
 */

const spotlights = [
  {
    id: 'caribbean-coffee-co',
    slug: 'caribbean-coffee-co',
    status: 'live',
    date: 'June 2026',
    businessName: 'Caribbean Coffee Co.',
    ownerName: 'Marlene Joseph',
    location: 'East Atlanta, GA',
    title: 'Brewing Culture in East Atlanta',
    subheading: 'Inside the small coffee shop bringing the flavors of home to a new generation.',
    excerpt: 'A conversation with the owner about heritage, community, and what it means to build a business rooted in culture.',
    thumb: 'spotlight-coffee-1.jpg',
  },
  // Add future spotlights below, e.g.:
  // {
  //   id: 'next-business-slug',
  //   slug: 'next-business-slug',
  //   status: 'soon',
  //   date: 'July 2026',
  //   businessName: 'Business Name',
  //   ownerName: 'Owner Name',
  //   location: 'Neighborhood, GA',
  //   title: 'Headline Title',
  //   subheading: 'One line description.',
  //   excerpt: 'Short teaser shown on cards.',
  //   thumb: 'spotlight-next.jpg',
  // },
]

export default spotlights
