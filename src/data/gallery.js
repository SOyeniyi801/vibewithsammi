/**
 * Gallery data for the Photography page.
 *
 * type: "image" | "video"
 * shape: "tall" | "wide" | "square"   — controls aspect ratio in the masonry grid
 * src:   path to file in src/assets/images/ or src/assets/videos/
 * caption: optional — shows in lightbox
 * event:   optional — event/context name, shows in lightbox
 *
 * To add a new item, copy a block below and update the fields.
 * Order in this array = order in the grid.
 */

const gallery = [
  {
    id: 'g1',
    type: 'image',
    shape: 'portrait',
    src: 'gallery-1.jpg',
    caption: 'Candid moment from the crowd',
    event: 'Lakoufet World Cup Watch Party',
  },
  {
    id: 'g2',
    type: 'image',
    shape: 'portrait',
    src: 'gallery-2.jpg',
    caption: '',
    event: 'Tennis on the Block',
  },
  {
    id: 'g3',
    type: 'image',
    shape: 'square',
    src: 'gallery-3.jpg',
    caption: '',
    event: 'Controllerise 6.1',
  },
  {
    id: 'g4',
    type: 'image',
    shape: 'landscape',
    src: 'gallery-4.jpg',
    caption: 'Festival energy',
    event: 'Lakoufet World Cup Watch Party',
  },
  {
    id: 'g5',
    type: 'image',
    shape: 'landscape',
    src: 'gallery-5.jpg',
    caption: '',
    event: '',
  },
  {
    id: 'g6',
    type: 'video',
    shape: 'portrait',
    src: 'recap-1.mp4',
    poster: 'gallery-6-poster.jpg',
    caption: 'Event recap',
    event: 'Lakoufet World Cup Watch Party',
  },
  {
    id: 'g7',
    type: 'image',
    shape: 'portrait',
    src: 'gallery-7.jpg',
    caption: '',
    event: '',
  },
  {
    id: 'g8',
    type: 'image',
    shape: 'square',
    src: 'gallery-8.jpg',
    caption: '',
    event: 'Tennis on the Block',
  },
  {
    id: 'g9',
    type: 'image',
    shape: 'portrait',
    src: 'gallery-9.jpg',
    caption: '',
    event: '',
  },
  {
    id: 'g10',
    type: 'image',
    shape: 'landscape',
    src: 'gallery-10.jpg',
    caption: '',
    event: '',
  },
  {
    id: 'g11',
    type: 'video',
    shape: 'portrait',
    src: 'recap-2.mp4',
    poster: 'gallery-11-poster.jpg',
    caption: 'Event recap',
    event: 'Chef Showdown - Chef Hope Recap',
  },
  {
    id: 'g12',
    type: 'image',
    shape: 'portrait',
    src: 'gallery-12.jpg',
    caption: '',
    event: '',
  },
  {
    id: 'g13',
    type: 'image',
    shape: 'portrait',
    src: 'gallery-13.jpg',
    caption: '',
    event: '',
  }
]

export default gallery
