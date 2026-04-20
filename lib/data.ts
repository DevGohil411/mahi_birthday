export interface Photo {
  id: string
  src: string
  alt: string
  caption: string
  type?: 'image' | 'video'
  description?: string
}

export interface HighlightPhoto extends Photo {
  width?: number
  height?: number
}

// ===== INTRO =====
export const INTRO_VIDEO = '/images/intro-video.mp4'

// ===== STORY PAGE - 2 Column Alternating Layout =====
// 12 photos for the story section (alternating left/right)
export const STORY_PHOTOS: Photo[] = [
  { id: 'story-1', src: '/images/photo-1.jpeg', alt: 'Story moment 1', caption: 'Elegant look', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
  { id: 'story-2', src: '/images/photo-2.jpeg', alt: 'Story moment 2', caption: 'Grace', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
  { id: 'story-3', src: '/images/photo-3.jpeg', alt: 'Story moment 3', caption: 'Stunning presence', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
  { id: 'story-4', src: '/images/photo-13.jpeg', alt: 'Story moment 4', caption: 'Portrait perfect', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
  { id: 'story-5', src: '/images/photo-5.jpeg', alt: 'Story moment 5', caption: 'Radiant glow', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
  { id: 'story-6', src: '/images/photo-6.jpeg', alt: 'Story moment 6', caption: 'Authentic style', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
  { id: 'story-7', src: '/images/photo-7.jpeg', alt: 'Story moment 7', caption: 'Timeless beauty', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
  { id: 'story-8', src: '/images/photo-8.jpeg', alt: 'Story moment 8', caption: 'Main character energy', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
  { id: 'story-9', src: '/images/photo-9.jpeg', alt: 'Story moment 9', caption: 'Vibrant spirit', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
  { id: 'story-10', src: '/images/photo-10.jpeg', alt: 'Story moment 10', caption: 'Luminous presence', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
  { id: 'story-11', src: '/images/photo-11.jpeg', alt: 'Story moment 11', caption: 'Effortless charm', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
  { id: 'story-12', src: '/images/photo-12.jpeg', alt: 'Story moment 12', caption: 'Genuine joy', type: 'image', description: 'Each moment captures the essence of who you are—radiant, authentic, and truly special.' },
]

// ===== GALLERY PAGE - 33 Photos + 7 Videos Shuffled =====
// Amazing mix of photos and videos for dynamic gallery flow
export const GALLERY_ITEMS: Photo[] = [
  // Row 1 - 4 items
  { id: 'g-1', src: '/images/photo-1.jpeg', alt: 'Photo 1', caption: 'Moment 1', type: 'image' },
  { id: 'g-2', src: '/images/photo-2.jpeg', alt: 'Photo 2', caption: 'Moment 2', type: 'image' },
  { id: 'g-3', src: '/images/photo-3.jpeg', alt: 'Photo 3', caption: 'Moment 3', type: 'image' },
  { id: 'g-video-1', src: '/images/video-1.mp4', alt: 'Video 1', caption: '▶ Video moment', type: 'video' },
  // Row 2
  { id: 'g-4', src: '/images/photo-4.jpeg', alt: 'Photo 4', caption: 'Moment 4', type: 'image' },
  { id: 'g-5', src: '/images/photo-5.jpeg', alt: 'Photo 5', caption: 'Moment 5', type: 'image' },
  { id: 'g-6', src: '/images/photo-6.jpeg', alt: 'Photo 6', caption: 'Moment 6', type: 'image' },
  { id: 'g-7', src: '/images/photo-7.jpeg', alt: 'Photo 7', caption: 'Moment 7', type: 'image' },
  // Row 3
  { id: 'g-8', src: '/images/photo-8.jpeg', alt: 'Photo 8', caption: 'Moment 8', type: 'image' },
  { id: 'g-video-2', src: '/images/video-2.mp4', alt: 'Video 2', caption: '▶ Special video', type: 'video' },
  { id: 'g-9', src: '/images/photo-9.jpeg', alt: 'Photo 9', caption: 'Moment 9', type: 'image' },
  { id: 'g-10', src: '/images/photo-10.jpeg', alt: 'Photo 10', caption: 'Moment 10', type: 'image' },
  // Row 4
  { id: 'g-11', src: '/images/photo-11.jpeg', alt: 'Photo 11', caption: 'Moment 11', type: 'image' },
  { id: 'g-12', src: '/images/photo-12.jpeg', alt: 'Photo 12', caption: 'Moment 12', type: 'image' },
  { id: 'g-13', src: '/images/photo-13.jpeg', alt: 'Photo 13', caption: 'Moment 13', type: 'image' },
  { id: 'g-14', src: '/images/photo-14.jpeg', alt: 'Photo 14', caption: 'Moment 14', type: 'image' },
  // Row 5
  { id: 'g-15', src: '/images/photo-15.jpeg', alt: 'Photo 15', caption: 'Moment 15', type: 'image' },
  { id: 'g-16', src: '/images/photo-16.jpeg', alt: 'Photo 16', caption: 'Moment 16', type: 'image' },
  { id: 'g-video-3', src: '/images/video-3.mp4', alt: 'Video 3', caption: '▶ Dynamic moment', type: 'video' },
  { id: 'g-17', src: '/images/photo-17.jpeg', alt: 'Photo 17', caption: 'Moment 17', type: 'image' },
  // Row 6
  { id: 'g-18', src: '/images/photo-18.jpeg', alt: 'Photo 18', caption: 'Moment 18', type: 'image' },
  { id: 'g-19', src: '/images/photo-19.jpeg', alt: 'Photo 19', caption: 'Moment 19', type: 'image' },
  { id: 'g-20', src: '/images/photo-20.jpeg', alt: 'Photo 20', caption: 'Moment 20', type: 'image' },
  { id: 'g-21', src: '/images/photo-21.jpeg', alt: 'Photo 21', caption: 'Moment 21', type: 'image' },
  // Row 7
  { id: 'g-22', src: '/images/photo-22.jpeg', alt: 'Photo 22', caption: 'Moment 22', type: 'image' },
  { id: 'g-video-4', src: '/images/video-4.mp4', alt: 'Video 4', caption: '▶ Cinematic moment', type: 'video' },
  { id: 'g-23', src: '/images/photo-23.jpeg', alt: 'Photo 23', caption: 'Moment 23', type: 'image' },
  { id: 'g-24', src: '/images/photo-24.jpeg', alt: 'Photo 24', caption: 'Moment 24', type: 'image' },
  // Row 8
  { id: 'g-25', src: '/images/photo-25.jpeg', alt: 'Photo 25', caption: 'Moment 25', type: 'image' },
  { id: 'g-26', src: '/images/photo-26.jpeg', alt: 'Photo 26', caption: 'Moment 26', type: 'image' },
  { id: 'g-27', src: '/images/photo-27.jpeg', alt: 'Photo 27', caption: 'Moment 27', type: 'image' },
  { id: 'g-28', src: '/images/photo-28.jpeg', alt: 'Photo 28', caption: 'Moment 28', type: 'image' },
  // Row 9
  { id: 'g-video-5', src: '/images/video-5.mp4', alt: 'Video 5', caption: '▶ Beautiful moment', type: 'video' },
  { id: 'g-29', src: '/images/photo-29.jpeg', alt: 'Photo 29', caption: 'Moment 29', type: 'image' },
  { id: 'g-30', src: '/images/photo-30.jpeg', alt: 'Photo 30', caption: 'Moment 30', type: 'image' },
  { id: 'g-31', src: '/images/photo-31.jpeg', alt: 'Photo 31', caption: 'Moment 31', type: 'image' },
  // Row 10 - Final
  { id: 'g-32', src: '/images/photo-32.jpeg', alt: 'Photo 32', caption: 'Moment 32', type: 'image' },
  { id: 'g-video-6', src: '/images/video-6.mp4', alt: 'Video 6', caption: '▶ Pure joy', type: 'video' },
  { id: 'g-33', src: '/images/photo-33.jpeg', alt: 'Photo 33', caption: 'Moment 33', type: 'image' },
  { id: 'g-video-7', src: '/images/video-7.mp4', alt: 'Video 7', caption: '▶ Final magic', type: 'video' },
]

// ===== MOMENTS PAGE - Highlight Sections (8 cinematic moments) =====
// Unique photos for moments section (no videos)
export const MOMENT_SECTIONS: Photo[] = [
  {
    id: 'moment-1',
    src: '/images/photo-14.jpeg',
    alt: 'Moment - Elegance',
    caption: 'The Grace in Every Frame',
    description: 'A celebration of elegance and poise',
    type: 'image',
  },
  {
    id: 'moment-2',
    src: '/images/photo-15.jpeg',
    alt: 'Moment - Vibrance',
    caption: 'Living in Color',
    description: 'Every moment brings vibrancy to life',
    type: 'image',
  },
  {
    id: 'moment-3',
    src: '/images/photo-16.jpeg',
    alt: 'Moment - Beauty',
    caption: 'Radiant Confidence',
    description: 'The beauty that shines from within',
    type: 'image',
  },
  {
    id: 'moment-4',
    src: '/images/photo-17.jpeg',
    alt: 'Moment - Joy',
    caption: 'Genuine Happiness',
    description: 'Real moments, real you',
    type: 'image',
  },
  {
    id: 'moment-5',
    src: '/images/photo-18.jpeg',
    alt: 'Moment - Essence',
    caption: 'The Essence of You',
    description: 'Authenticity in every frame',
    type: 'image',
  },
  {
    id: 'moment-6',
    src: '/images/photo-19.jpeg',
    alt: 'Moment - Spirit',
    caption: 'Vibrant Spirit',
    description: 'Your authentic energy shines through',
    type: 'image',
  },
  {
    id: 'moment-7',
    src: '/images/photo-20.jpeg',
    alt: 'Moment - Strength',
    caption: 'Quiet Strength',
    description: 'Power in presence',
    type: 'image',
  },
  {
    id: 'moment-8',
    src: '/images/photo-21.jpeg',
    alt: 'Moment - Wonder',
    caption: 'Full of Wonder',
    description: 'Capturing pure moments',
    type: 'image',
  },
]

// ===== DISCOVER PAGE - Different Unique Photos (no videos) =====
export const DISCOVER_PHOTOS: Photo[] = [
  {
    id: 'discover-1',
    src: '/images/photo-22.jpeg',
    alt: 'Discover - Dreams',
    caption: 'Dreams in Motion',
    description: 'Where your spirit takes flight',
    type: 'image',
  },
  {
    id: 'discover-2',
    src: '/images/photo-23.jpeg',
    alt: 'Discover - Light',
    caption: 'In the Light',
    description: 'Where you truly shine',
    type: 'image',
  },
  {
    id: 'discover-3',
    src: '/images/photo-24.jpeg',
    alt: 'Discover - Freedom',
    caption: 'Freedom Defined',
    description: 'Living authentically',
    type: 'image',
  },
  {
    id: 'discover-4',
    src: '/images/photo-25.jpeg',
    alt: 'Discover - Soul',
    caption: 'Soul Deep',
    description: 'Where authenticity lives',
    type: 'image',
  },
  {
    id: 'discover-5',
    src: '/images/photo-26.jpeg',
    alt: 'Discover - Vision',
    caption: 'Vision',
    description: 'What you see for yourself',
    type: 'image',
  },
  {
    id: 'discover-6',
    src: '/images/photo-27.jpeg',
    alt: 'Discover - Journey',
    caption: 'The Journey',
    description: 'Every step matters',
    type: 'image',
  },
  {
    id: 'discover-7',
    src: '/images/photo-28.jpeg',
    alt: 'Discover - Legacy',
    caption: 'Legacy',
    description: 'What you leave behind',
    type: 'image',
  },
  {
    id: 'discover-8',
    src: '/images/photo-29.jpeg',
    alt: 'Discover - Forever',
    caption: 'Forever You',
    description: 'Timeless and true',
    type: 'image',
  },
]

// ===== HIGHLIGHT PHOTOS - Horizontal Scroll Section =====
export const HIGHLIGHT_PHOTOS: HighlightPhoto[] = [
  {
    id: 'h1',
    src: '/images/photo-5.jpeg',
    alt: 'Highlight - Elegance',
    caption: 'Elegance',
    type: 'image',
  },
  {
    id: 'h2',
    src: '/images/photo-7.jpeg',
    alt: 'Highlight - Style',
    caption: 'Style',
    type: 'image',
  },
  {
    id: 'h3',
    src: '/images/photo-30.jpeg',
    alt: 'Highlight - Grace',
    caption: 'Grace',
    type: 'image',
  },
  {
    id: 'h4',
    src: '/images/photo-32.jpeg',
    alt: 'Highlight - Beauty',
    caption: 'Beauty',
    type: 'image',
  },
  {
    id: 'h5',
    src: '/images/photo-33.jpeg',
    alt: 'Highlight - Moment',
    caption: 'Moments',
    type: 'image',
  },
  {
    id: 'h6',
    src: '/images/photo-20.jpeg',
    alt: 'Highlight - Radiance',
    caption: 'Radiance',
    type: 'image',
  },
  {
    id: 'h7',
    src: '/images/photo-31.jpeg',
    alt: 'Highlight - Spirit',
    caption: 'Spirit',
    type: 'image',
  },
  {
    id: 'h8',
    src: '/images/photo-15.jpeg',
    alt: 'Highlight - Confidence',
    caption: 'Confidence',
    type: 'image',
  },
  {
    id: 'h9',
    src: '/images/photo-21.jpeg',
    alt: 'Highlight - Authenticity',
    caption: 'Authenticity',
    type: 'image',
  },
  {
    id: 'h10',
    src: '/images/photo-27.jpeg',
    alt: 'Highlight - Essence',
    caption: 'Essence',
    type: 'image',
  },
]

// ===== HERO 3D SECTION =====
export const HERO_IMAGE = '/images/photo-1.jpeg'

// ===== TEXT CONTENT =====
export const BIRTHDAY_NAME = 'Mahi'

export const HERO_TEXT = {
  title: 'Happy Birthday',
  name: 'Mahi',
  subtitle: 'A space made entirely for you—celebrating who you are',
}

export const MESSAGE_LINES = [
  "Happy Birthday, Mahi ✨",
  "",
  "Some people don't need a loud presence to be noticed.",
  "They don't need to try too hard, or say too much.",
  "There's just something about the way they exist—",
  "calm, natural, and completely themselves.",
  "",
  "And somehow, that's enough to leave an impression.",
  "Not because they demand attention,",
  "but because they carry something real.",
  "",
  "Mahi, you're exactly one of those people.",
  "",
  "There's a quiet confidence in the way you carry yourself.",
  "Not the kind that needs validation.",
  "Not the kind that seeks approval—",
  "but the kind that simply knows its worth.",
  "",
  "You don't try to stand out.",
  "You don't force anything.",
  "And still, everyone notices you.",
  "",
  "Because your authenticity is rare and beautiful.",
  "Your kindness is genuine.",
  "Your presence is felt.",
  "",
  "This is your year to shine even brighter.",
  "Not for anyone else—for you.",
  "Chase what makes your heart race.",
  "Rest without guilt.",
  "Celebrate yourself completely.",
  "Be proud of how far you've come.",
  "",
  "You deserve every beautiful thing",
  "that comes your way, and so much more.",
  "",
  "Happy Birthday to someone truly special. 💫",
]

export const SECONDARY_MESSAGE = [
  "One more thing, Mahi...",
  "",
  "In a world where it's easy to get lost,",
  "you remain beautifully, unapologetically YOU.",
  "",
  "Your dreams matter.",
  "Your voice deserves to be heard.",
  "Your happiness is worth fighting for.",
  "",
  "So take this year and make it legendary.",
  "Laugh a little louder.",
  "Dream a little bigger.",
  "Love yourself a little harder.",
  "",
  "Because someone who shines this brightly",
  "deserves to have the entire year light up",
  "in response.",
  "",
  "Happy Birthday, beautiful soul. 🌟",
]

export const FINALE_TEXT =
  "Mahi, you didn't need any of this to be special.\nYou didn't need a page, or words, or anything extra.\n\nBecause the truth is—you already were.\n\nHere's to another year of being absolutely, brilliantly, unapologetically you. 🌟\n\nMake it unforgettable. 💫"

// All photos for reference
export const ALL_PHOTOS = Array.from({ length: 33 }, (_, i) => ({
  id: `photo-${i + 1}`,
  src: `/images/photo-${i + 1}.jpeg`,
  alt: `Photo ${i + 1}`,
  caption: `Moment ${i + 1}`,
  type: 'image' as const,
}))

// All videos for reference (only intro video exists)
export const ALL_VIDEOS = [
  {
    id: 'intro-video',
    src: '/images/intro-video.mp4',
    alt: 'Birthday intro',
    caption: 'Birthday greeting',
    type: 'video' as const,
  },
]
