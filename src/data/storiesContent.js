/**
 * All story content lives here, one entry per story.
 * The StoryPage template reads a story by slug and renders its blocks.
 *
 * To add a new story: copy an entry below, change the slug and content,
 * done — no new files, no registration step.
 *
 * blocks[].type options:
 *   'imagePairQuote'  — image + pull quote + paragraph (optional 2nd image below)
 *   'imageDuo'        — two images side by side + caption
 *   'quoteImageText'  — quote + image + paragraph(s), 3 columns
 *   'imageHighlight'  — image + highlighted heading + paragraph
 */

const stories = [

  // ════════════════════════════════════════════
  // STORY 1 — Lakoufet
  // ════════════════════════════════════════════
  {
    slug: 'lakoufet',
    tag: 'Event',
    title: 'Lakoufet World Cup Watch Party',
    kicker: 'Behind the lens',
    intro: 'On a Wednesday afternoon in Atlanta, hundreds of Haitians gathered to celebrate more than soccer. Lakoufet\u2019s World Cup Watch Party became a celebration of culture, music, and one unforgettable triumph as Haiti made history in the World Cup.',
    heroImage: 'lakou-fet-001.jpg',

    photography: 'Sammi Oyeniyi',
    location: 'Atlanta, GA',
    date: 'June 16, 2026',
    category: 'Culture \u00b7 Event',

    blocks: [
      {
        type: 'imagePairQuote',
        image1: 'lakou-fet-002.jpg',
        image1Alt: 'women celebrating in a crowd',
        quote: 'When Haiti scored the second goal, the entire venue erupted.',
        paragraph: 'Hosted by Lakou at the Westside Motor Lounge, this event brought together Haitians and soccer fans alike to witness the historic return of Haiti to the World Cup.',
      },
      {
        type: 'imageDuo',
        image1: 'lakou-fet-003.jpg',
        image1Alt:'woman dancing in a crowd',
        image2: 'lakou-fet-006.jpg',
        image2Alt:'crowd waving flags and dancing',
        caption: 'A sea of blue and red. Flags waving. Music shaking the walls. Pride in every chant.',
      },
      {
        type: 'quoteImageText',
        quote: 'For one afternoon, Atlanta felt like Port-au-Prince.',
        image: 'lakou-fet-004.jpg',
        imageAlt: 'singer on stage holding haitian flag',
        paragraphs: [
          'It was not only just a watch party. Lakou brought out the biggest names in Haitian music. Rich Cave, Eyo-e, 5Lan, Jperry and T-vice headlined the festival.',
          'Haitian DJs Unruley, Kash, Magic Kenny, Flockaland, and others kept the vibes going throughout the day.',
        ],
      },
      {
        type: 'imageHighlight',
        image: 'lakou-fet-005.jpg',
        imageAlt: 'man screaming in excitement',
        highlight: 'The historic moment where Haiti scored for a 2nd time!',
        paragraph: 'Cheers. Tears. Strangers hugging like family. It wasn\u2019t just a goal \u2014 it was history.',
      },
    ],

    marquee: [
      'lakou-fet-007.jpg',
      'lakou-fet-008.jpg',
      'lakou-fet-009.jpg',
      'lakou-fet-010.jpg',
      'lakou-fet-011.jpg',
      'lakou-fet-012.jpg',
    ],

    galleryUrl: 'https://drive.google.com/drive/folders/1ZoPEOFxlAivjZGJ483pMSetIMefDseDT?usp=sharing',
    instagramHandle: 'lakoufet',
    instagramUrl: 'https://www.instagram.com/lakoufet/',
  },

  // ════════════════════════════════════════════
  // STORY 2 — Tennis on the Block
  // ════════════════════════════════════════════
  {
    slug: 'tennis-on-the-block',
    tag: 'Event',
    title: 'Tennis on the Block',
    kicker: 'Behind the lens',
    intro: 'Replace with your intro paragraph for this story.',
    heroImage: 'story-tennis-hero.jpg',

    photography: 'Sammi Oyeniyi',
    location: 'Atlanta, GA',
    date: 'June 2026',
    category: 'Community \u00b7 Event',

    blocks: [
      {
        type: 'imagePairQuote',
        image1: 'story-tennis-1.jpg',
        image2: 'story-tennis-2.jpg',
        quote: 'Replace with your pull quote.',
        paragraph: 'Replace with your paragraph.',
      },
      {
        type: 'imageDuo',
        image1: 'story-tennis-3.jpg',
        image2: 'story-tennis-4.jpg',
        caption: 'Replace with your caption.',
      },
      {
        type: 'quoteImageText',
        quote: 'Replace with your second pull quote.',
        image: 'story-tennis-5.jpg',
        paragraphs: ['Replace with your paragraph(s).'],
      },
      {
        type: 'imageHighlight',
        image: 'story-tennis-6.jpg',
        highlight: 'Replace with your highlight line.',
        paragraph: 'Replace with your closing paragraph.',
      },
    ],

    marquee: [
      'story-tennis-g1.jpg',
      'story-tennis-g2.jpg',
      'story-tennis-g3.jpg',
      'story-tennis-g4.jpg',
      'story-tennis-g5.jpg',
      'story-tennis-g6.jpg',
    ],

    galleryUrl: 'https://drive.google.com/placeholder-tennis',
    instagramHandle: '',
    instagramUrl: '',
  },

  // ════════════════════════════════════════════
  // STORY 3 — Unplugged Ayiti
  // ════════════════════════════════════════════
  {
    slug: 'unplugged-ayiti',
    tag: 'Event',
    title: 'Unplugged Ayiti',
    kicker: 'Behind the lens',
    intro: 'Replace with your intro paragraph for this story.',
    heroImage: 'story-unplugged-ayiti-hero.jpg',

    photography: 'Sammi Oyeniyi',
    location: 'Atlanta, GA',
    date: 'June 2026',
    category: 'Culture \u00b7 Event',

    blocks: [
      {
        type: 'imagePairQuote',
        image1: 'story-unplugged-1.jpg',
        image2: 'story-unplugged-2.jpg',
        quote: 'Replace with your pull quote.',
        paragraph: 'Replace with your paragraph.',
      },
      {
        type: 'imageDuo',
        image1: 'story-unplugged-3.jpg',
        image2: 'story-unplugged-4.jpg',
        caption: 'Replace with your caption.',
      },
      {
        type: 'quoteImageText',
        quote: 'Replace with your second pull quote.',
        image: 'story-unplugged-5.jpg',
        paragraphs: ['Replace with your paragraph(s).'],
      },
      {
        type: 'imageHighlight',
        image: 'story-unplugged-6.jpg',
        highlight: 'Replace with your highlight line.',
        paragraph: 'Replace with your closing paragraph.',
      },
    ],

    marquee: [
      'story-unplugged-g1.jpg',
      'story-unplugged-g2.jpg',
      'story-unplugged-g3.jpg',
      'story-unplugged-g4.jpg',
      'story-unplugged-g5.jpg',
      'story-unplugged-g6.jpg',
    ],

    galleryUrl: 'https://drive.google.com/placeholder-unplugged-ayiti',
    instagramHandle: '',
    instagramUrl: '',
  },

  // ════════════════════════════════════════════
  // STORY 4 — replace slug/title/content
  // ════════════════════════════════════════════
  {
    slug: 'story-4',
    tag: 'Event',
    title: 'Story Title',
    kicker: 'Behind the lens',
    intro: 'Replace with your intro paragraph for this story.',
    heroImage: 'story-4-hero.jpg',

    photography: 'Sammi Oyeniyi',
    location: 'Atlanta, GA',
    date: '2026',
    category: 'Culture \u00b7 Event',

    blocks: [
      {
        type: 'imagePairQuote',
        image1: 'story-4-1.jpg',
        image2: 'story-4-2.jpg',
        quote: 'Replace with your pull quote.',
        paragraph: 'Replace with your paragraph.',
      },
      {
        type: 'imageDuo',
        image1: 'story-4-3.jpg',
        image2: 'story-4-4.jpg',
        caption: 'Replace with your caption.',
      },
      {
        type: 'quoteImageText',
        quote: 'Replace with your second pull quote.',
        image: 'story-4-5.jpg',
        paragraphs: ['Replace with your paragraph(s).'],
      },
      {
        type: 'imageHighlight',
        image: 'story-4-6.jpg',
        highlight: 'Replace with your highlight line.',
        paragraph: 'Replace with your closing paragraph.',
      },
    ],

    marquee: [
      'story-4-g1.jpg',
      'story-4-g2.jpg',
      'story-4-g3.jpg',
      'story-4-g4.jpg',
      'story-4-g5.jpg',
      'story-4-g6.jpg',
    ],

    galleryUrl: 'https://drive.google.com/placeholder-story-4',
    instagramHandle: '',
    instagramUrl: '',
  },

  // ════════════════════════════════════════════
  // STORY 5 — replace slug/title/content
  // ════════════════════════════════════════════
  {
    slug: 'story-5',
    tag: 'Event',
    title: 'Story Title',
    kicker: 'Behind the lens',
    intro: 'Replace with your intro paragraph for this story.',
    heroImage: 'story-5-hero.jpg',

    photography: 'Sammi Oyeniyi',
    location: 'Atlanta, GA',
    date: '2026',
    category: 'Culture \u00b7 Event',

    blocks: [
      {
        type: 'imagePairQuote',
        image1: 'story-5-1.jpg',
        image2: 'story-5-2.jpg',
        quote: 'Replace with your pull quote.',
        paragraph: 'Replace with your paragraph.',
      },
      {
        type: 'imageDuo',
        image1: 'story-5-3.jpg',
        image2: 'story-5-4.jpg',
        caption: 'Replace with your caption.',
      },
      {
        type: 'quoteImageText',
        quote: 'Replace with your second pull quote.',
        image: 'story-5-5.jpg',
        paragraphs: ['Replace with your paragraph(s).'],
      },
      {
        type: 'imageHighlight',
        image: 'story-5-6.jpg',
        highlight: 'Replace with your highlight line.',
        paragraph: 'Replace with your closing paragraph.',
      },
    ],

    marquee: [
      'story-5-g1.jpg',
      'story-5-g2.jpg',
      'story-5-g3.jpg',
      'story-5-g4.jpg',
      'story-5-g5.jpg',
      'story-5-g6.jpg',
    ],

    galleryUrl: 'https://drive.google.com/placeholder-story-5',
    instagramHandle: '',
    instagramUrl: '',
  },

  // ════════════════════════════════════════════
  // STORY 6 — replace slug/title/content
  // ════════════════════════════════════════════
  {
    slug: 'story-6',
    tag: 'Event',
    title: 'Story Title',
    kicker: 'Behind the lens',
    intro: 'Replace with your intro paragraph for this story.',
    heroImage: 'story-6-hero.jpg',

    photography: 'Sammi Oyeniyi',
    location: 'Atlanta, GA',
    date: '2026',
    category: 'Culture \u00b7 Event',

    blocks: [
      {
        type: 'imagePairQuote',
        image1: 'story-6-1.jpg',
        image2: 'story-6-2.jpg',
        quote: 'Replace with your pull quote.',
        paragraph: 'Replace with your paragraph.',
      },
      {
        type: 'imageDuo',
        image1: 'story-6-3.jpg',
        image2: 'story-6-4.jpg',
        caption: 'Replace with your caption.',
      },
      {
        type: 'quoteImageText',
        quote: 'Replace with your second pull quote.',
        image: 'story-6-5.jpg',
        paragraphs: ['Replace with your paragraph(s).'],
      },
      {
        type: 'imageHighlight',
        image: 'story-6-6.jpg',
        highlight: 'Replace with your highlight line.',
        paragraph: 'Replace with your closing paragraph.',
      },
    ],

    marquee: [
      'story-6-g1.jpg',
      'story-6-g2.jpg',
      'story-6-g3.jpg',
      'story-6-g4.jpg',
      'story-6-g5.jpg',
      'story-6-g6.jpg',
    ],

    galleryUrl: 'https://drive.google.com/placeholder-story-6',
    instagramHandle: '',
    instagramUrl: '',
  },

]

export default stories

export function getStoryBySlug(slug) {
  return stories.find((s) => s.slug === slug) || null
}
