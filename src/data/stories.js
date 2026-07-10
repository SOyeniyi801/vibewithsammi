/**
 * Stories for the Behind the Lens publication.
 * Add a new story by copying a block. Set status to 'live' once the
 * individual story page exists, otherwise 'soon' shows a dimmed card.
 *
 * thumb: filename in src/assets/images/
 * slug: used for the route /publication/:slug
 */

const stories = [
  {
    id: 'lakoufet',
    slug: 'lakoufet',
    status: 'live',
    tag: 'Event Coverage',
    date: 'June 2026',
    title: 'Lakoufet World Cup Watch Party',
    excerpt: 'Haiti came to Atlanta for the World Cup and partied in the Lakou. A celebration of music, food, culture, and history.',
    thumb: 'story-thumb.jpg',
  },
  {
    id: 'beltline-fest',
    slug: 'atl-beltline-festival',
    status: 'soon',
    tag: 'Event Coverage',
    date: 'June 2026',
    title: 'Atlanta Beltline Festival',
    excerpt: 'Atlanta came out to celebrate the World Cup on the Beltline',
    thumb: 'story-tennis.jpg',
  },
  {
    id: 'unplugged-ayiti',
    slug: 'unplugged-ayiti',
    status: 'soon',
    tag: 'Event Coverage',
    date: 'June 2026',
    title: 'Unplugged Ayiti',
    excerpt: 'An intimate evening where art, flavor, and culture come together under the stars.',
    thumb: 'story-unplugged-ayiti.jpg',
  }
]

export default stories