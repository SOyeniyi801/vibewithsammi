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
  // STORY 1 — Rum Island Festival
  // ════════════════════════════════════════════
  {
    slug: 'rum-island-fest',
    tag: 'Event',
    title: 'Rum Island Festival',
    kicker: 'Behind the lens',
    intro: "Based in Atlanta's Piedmont Park, Rum Island Festival transformed the promenade into a Caribbean music festival for the night. This immersive cultural experience had it all: food, music, drinks, culture, and fun. The bass of the drums could be felt as you came down the stairs into the grass field, where hundreds of West Indians were jumping and waving to the vibes. Food trucks and vendors lined the perimeter of the park, making sure attendees had everything they needed for the all-day festivities.",
    heroImage: 'rum-island-fest-011.jpg',

    photography: 'Sammi Oyeniyi',
    location: 'Atlanta, GA',
    date: 'July 11, 2026',
    category: 'Culture \u00b7 Event',

    blocks: [
      {
        type: 'imagePairQuote',
        image1: 'rum-island-fest-007.jpg',
        image1Alt: 'women dancing in a crowd',
        quote: 'Built on the ethos "Culture. Community. Rum.", Rum Island Festival is more than a music event.',
        paragraph: "This was Rum Island Festival's first-ever event, and I'm sure it won't be its last. The festival started with DJ sets from renowned DJs like Ricky Platinum, Yung Rage, Propa English, Unique Soundz, Boogy Ranks, DJ Fabb, and more. From early, the vibes were set despite the rainstorm that was wrecking havoc earlier in the day.",
      },
      {
        type: 'imageDuo',
        image1: 'rum-island-fest-003.jpg',
        image1Alt:'Denise Belfon performing on stage',
        image2: 'rum-island-fest-009.jpg',
        image2Alt:'woman dancing in the crowd',
        caption: 'Everyone was dancing, the culture was alive',
      },
      {
        type: 'quoteImageText',
        highlight: 'From DJs setting the tone to artists commanding the stage, the energy never let up.',
        image: 'rum-island-fest-012.jpg',
        imageAlt: 'singer on stage holding haitian flag',
        paragraphs: [
          "Pretty Vee took the stage as the festival transformed into a concert, showing us that you can still split in Prada boots.", "Superstars like Trinidad's own Denise Belfon took the stage to remind the ladies who the whining specialist was, and to always look out for your fellow woman.", "Jamaican-Haitian artist Aytian performed hits like Tip and Wah Yo Deh Pan, sending the crowd into a frenzy. He even invited girls from the audience on stage to show who could get down the baddest. And the gyal dem got down bad."
        ],
      },
      {
        type: 'imageHighlight',
        image: 'rum-island-fest-006.jpg',
        imageAlt: 'man screaming in excitement',
        highlight: 'As the night came to a close, one thing was clear: Atlanta showed up for Caribbean culture.',
        paragraphs: ['The night ended with Jamaican superstar Aidonia shutting down the house. The entire promenade was full of attendees waving their flags in the air as he performed a number of his biggest hits across the years.', 'Overall, Rum Island Festival embodied its principles: Culture. Community. Rum. A portion of the proceeds benefited their partnership with Her Village Inc., a 501(c)(3) nonprofit organization dedicated to supporting families experiencing poverty.']
      },
    ],

    marquee: [
      'rum-island-fest-002.jpg',
      'rum-island-fest-004.jpg',
      'rum-island-fest-005.jpg',
      'rum-island-fest-001.jpg',
      'rum-island-fest-007.jpg',
      'rum-island-fest-008.jpg',
    ],

    galleryUrl: 'https://drive.google.com/drive/folders/1IHpB2PTDmcZInO43hZPKOXlXIeoYxk12?usp=drive_link',
    instagramHandle: 'rumislandfest',
    instagramUrl: 'https://www.instagram.com/rumislandfest/',
  },

  // ════════════════════════════════════════════
  // STORY 2 — Lakoufet
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
        highlight: 'For one afternoon, Atlanta felt like Port-au-Prince.',
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
        paragraphs: ['Cheers. Tears. Strangers hugging like family. It wasn\u2019t just a goal \u2014 it was history.']
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
  // STORY 3 — Atlanta Beltline Fest
  // ════════════════════════════════════════════
  {
    slug: 'beltline-fest',
    tag: 'Event',
    title: 'Atlanta Beltline Fest',
    kicker: 'Behind the lens',
    intro: 'Atlanta Beltline Fest transformed Pittsburgh Yards into a global celebration of culture, community, and connection. Over two days, thousands gathered to watch World Cup matches, explore international cuisine, experience performances from around the world, and celebrate the opening of Pittsburgh Yards newest Beltline connection.',
    heroImage: 'beltline-fest-001.jpg',

    photography: 'Sammi Oyeniyi',
    location: 'Atlanta, GA',
    date: 'June 2026',
    category: 'Community \u00b7 Event',

    blocks: [
      {
        type: 'imagePairQuote',
        image1: 'beltline-fest-003.jpg',
        image2: 'beltline-fest-002.jpg',
        quote: 'We wanted to make sure the World Cup happened with Atlanta, not to Atlanta.',
        paragraph: "Atlanta Beltline Fest embodied that vision. Rather than centering the tournament inside the stadium alone, the festival extended the World Cup into Atlanta's neighborhoods—bringing together music, food, culture, and community at Pittsburgh Yards while celebrating the opening of its newest Beltline connection.",
      },
      {
        type: 'imageDuo',
        image1: 'beltline-fest-002.jpg',
        image2: 'beltline-fest-005.jpg',
        caption: 'A weekend where every path led to music, food, and community.',
      },
      {
        type: 'quoteImageText',
        highlight: 'The evening moved to its own rhythm.',
        image: 'beltline-fest-004.jpg',
        paragraphs: ['DJ UnRuely and Canterbury Tales set the tone with their signature mashup styles, blending familiar classics with fresh, unexpected spins. The result was pure Atlanta: people from every walk of life dancing together, caught somewhere between nostalgia, rhythm, and discovery.'],
      },
      {
        type: 'imageHighlight',
        image: 'beltline-fest-013.jpg',
        highlight: 'Then Busta Rhymes took the stage.',
        paragraphs: ["The energy reached another level when Busta Rhymes and Spliff Star hit the stage. For a moment, it felt like Atlanta had been transported back to the golden era of hip-hop. Together, they took the crowd on a journey through decades of music, with every song unlocking memories tied to a different chapter of life.", "Busta made sure to show love to our hometown of Brooklyn, New York, even shouting out the Knicks' championship run, drawing a roar from the New Yorkers in the crowd. And when it came time for his signature rapid-fire delivery, he didn't miss a beat, proving why he's remained one of hip-hop's most electrifying performers."],
      },
    ],

    marquee: [
      'beltline-fest-006.jpg',
      'beltline-fest-007.jpg',
      'beltline-fest-008.jpg',
      'beltline-fest-009.jpg',
      'beltline-fest-010.jpg',
      'beltline-fest-011.jpg',
      'beltline-fest-012.jpg'
    ],

    galleryUrl: 'https://drive.google.com/drive/folders/1ZfTpUamw9xWUd0rKk-GxTnKibHkvgLP3?usp=drive_link',
    instagramHandle: '',
    instagramUrl: '',
  },

  // ════════════════════════════════════════════
  // STORY 4 — Unplugged Ayiti
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
