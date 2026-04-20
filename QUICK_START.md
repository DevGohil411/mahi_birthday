# Quick Start Guide

## 1. Add Your Photos

Copy your birthday photos to `public/images/` and name them:
- `photo-1.jpg`
- `photo-2.jpg`
- `photo-3.jpg`
- ... etc

Minimum 4 photos recommended.

## 2. Update Configuration

Edit `lib/data.ts` with your content:

```typescript
// Change the birthday name
export const BIRTHDAY_NAME = 'Mahi'

// Update photo references
export const PHOTOS: Photo[] = [
  {
    id: '1',
    src: '/images/photo-1.jpg',
    alt: 'Photo description',
    caption: 'A beautiful compliment',
  },
  // Add more photos
]

// Customize the message
export const MESSAGE_LINES = [
  "I didn't need years of memories to know",
  "you're someone rare.",
  // ... modify lines as needed
]

// Update final message
export const FINALE_TEXT = "Your custom goodbye message here."
```

## 3. Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

## 4. Customize Colors (Optional)

Edit `tailwind.config.js`:

```javascript
colors: {
  'dark-bg': '#0E0E10',      // Main background
  'dark-surface': '#1A1A1D', // Card/surface color
  'light-text': '#E5E5E5',   // Main text
  'secondary-text': '#A1A1AA', // Muted text
  'accent': '#D4D4D8',       // Highlight color
}
```

## 5. Deploy

### Vercel (Easiest)
1. Push to GitHub
2. Import in Vercel
3. Deploy (auto-deploys on push)

### Local Testing
```bash
npm run build
npm start
# Test at http://localhost:3000
```

---

## File Structure Reference

```
birthday-website/
├── components/
│   ├── Hero.tsx         ← 3D rotating section
│   ├── PhotoGrid.tsx    ← Photo gallery grid
│   ├── HighlightStrip.tsx ← Horizontal scroll
│   ├── Message.tsx      ← Main message
│   └── Finale.tsx       ← Ending + confetti
├── lib/
│   └── data.ts          ← ALL content here
├── public/images/       ← Your photos here
└── app/
    ├── page.tsx         ← Main page
    ├── layout.tsx
    └── globals.css
```

## Common Customizations

### Change hover animation speed
In `components/PhotoGrid.tsx`:
```typescript
transition={{ duration: 0.3 }} // Adjust duration
```

### Modify confetti colors
In `components/Finale.tsx`:
```typescript
const colors = ['#D4D4D8', '#A1A1AA', '#E5E5E5', '#1A1A1D']
// Add more colors in hex format
```

### Add more sections
Duplicate a component and add to `app/page.tsx`:
```typescript
<YourNewComponent />
```

## Troubleshooting

**Images not showing?**
- Check file names match exactly in `lib/data.ts`
- Verify files are in `public/images/`
- Clear browser cache and rebuild

**Animations not smooth?**
- Try latest Chrome/Edge browser
- Disable browser extensions
- Hardware acceleration should be enabled

**Build fails?**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

## Need Help?

- Check `README.md` for full documentation
- Review component code comments
- Verify `public/images/` folder has photos

---

Have fun! 🎉
