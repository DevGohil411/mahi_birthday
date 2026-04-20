# Birthday Website

A premium, aesthetic birthday tribute website built with Next.js, Tailwind CSS, Framer Motion, and React Three Fiber.

## Features

- **3D Hero Section**: Rotating 3D plane with parallax scroll effect
- **Photo Gallery**: Responsive masonry layout with hover animations and captions
- **Highlight Strip**: Horizontal scrolling section with parallax images
- **Message Section**: Line-by-line reveal animation with emotional messaging
- **Finale Section**: Confetti animation with closing message
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance Optimized**: Image lazy loading and canvas-based effects

## Tech Stack

- **Next.js 14** - React framework with app router
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **React Three Fiber** - 3D graphics with Three.js
- **Drei** - Useful helpers for Three.js

## Color System

```
Background: #0E0E10
Surface: #1A1A1D
Primary Text: #E5E5E5
Secondary Text: #A1A1AA
Accent: #D4D4D8
```

## Project Structure

```
birthday-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # 3D hero section
│   ├── PhotoGrid.tsx       # Photo gallery
│   ├── HighlightStrip.tsx  # Horizontal scroll
│   ├── Message.tsx         # Message section
│   ├── Finale.tsx          # Finale with confetti
├── lib/
│   ├── data.ts             # Configuration and data
├── public/
│   ├── images/             # Place your photos here
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   └── ...
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd birthday-website
```

2. Install dependencies:
```bash
npm install
```

3. Add your photos:
   - Place your image files in the `public/images/` directory
   - Supported formats: JPG, PNG, WebP
   - Recommended: 6+ high-quality photos
   - File names should match the `src` paths in `lib/data.ts`

4. Update content (optional):
   - Edit `lib/data.ts` to customize:
     - Birthday name
     - Photo captions
     - Message text
     - Final message

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Birthday Name

Edit `lib/data.ts`:
```typescript
export const BIRTHDAY_NAME = 'Your Name'
```

### Add/Change Photos

1. Add images to `public/images/`
2. Update the `PHOTOS` and `HIGHLIGHT_PHOTOS` arrays in `lib/data.ts`
3. Include captions for each photo

### Modify Message

Edit the `MESSAGE_LINES` array in `lib/data.ts`:
```typescript
export const MESSAGE_LINES = [
  "Your custom message here",
  "Line by line",
  // ...
]
```

### Adjust Colors

Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  'dark-bg': '#0E0E10',
  'dark-surface': '#1A1A1D',
  // ...
}
```

## Animation Details

- **Scroll Parallax**: Hero section moves as you scroll
- **Stagger Animation**: Gallery items fade in sequentially
- **Hover Effects**: Images scale and glow on hover
- **Confetti**: Lightweight canvas-based animation (triggered on finale view)
- **Line Reveal**: Message lines animate in one by one

## Performance Tips

1. **Image Optimization**:
   - Use compressed images (WebP preferred)
   - Keep file sizes under 500KB each
   - Use Next.js Image component (already configured)

2. **3D Canvas**:
   - Optimized with limited geometry
   - Uses ambient and directional lighting only
   - Canvas renders at native resolution

3. **Animations**:
   - GPU-accelerated with `transform` and `opacity`
   - Framer Motion handles optimization automatically

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Deploy with one click

```bash
vercel
```

### Other Platforms

The project builds to static HTML/CSS/JS and can be deployed to:
- Netlify
- GitHub Pages
- Any static host

```bash
npm run build
# Deploy the .next folder
```

## Notes

- The hero section 3D plane displays a gradient placeholder. Replace with your own texture by updating the canvas rendering in `components/Hero.tsx`
- Confetti animation is lightweight and uses canvas for performance
- All animations use `easeOut` timing for smooth, cinematic feel
- Mobile responsive at 320px and up

## License

Personal use only.

---

**Created with care** — A tribute to someone special 🎂
