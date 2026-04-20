# Project Files Summary

## Project Structure

```
birthday-website/
│
├── 📄 Configuration Files
│   ├── package.json              ← Dependencies and scripts
│   ├── tsconfig.json             ← TypeScript configuration
│   ├── next.config.js            ← Next.js configuration
│   ├── tailwind.config.js        ← Tailwind CSS configuration
│   ├── postcss.config.js         ← PostCSS configuration
│   ├── next-env.d.ts             ← TypeScript Next.js types
│   └── .gitignore                ← Git ignore rules
│
├── 📁 app/
│   ├── layout.tsx                ← Root layout wrapper
│   ├── page.tsx                  ← Home page (main entry)
│   └── globals.css               ← Global styles & animations
│
├── 📁 components/
│   ├── Hero.tsx                  ← 3D hero with parallax
│   ├── PhotoGrid.tsx             ← Photo gallery grid
│   ├── HighlightStrip.tsx        ← Horizontal scroll section
│   ├── Message.tsx               ← Message reveal section
│   └── Finale.tsx                ← Ending with confetti
│
├── 📁 lib/
│   ├── data.ts                   ← Content & configuration
│   ├── config.ts                 ← App configuration
│   └── utils.ts                  ← Utility functions
│
├── 📁 public/
│   └── images/                   ← Your photos go here
│       └── README.md             ← Image guide
│
├── 📚 Documentation Files
│   ├── README.md                 ← Full documentation
│   ├── QUICK_START.md            ← Quick setup guide
│   ├── COMPONENTS.md             ← Component details
│   ├── DEPLOYMENT.md             ← Deployment guide
│   └── FILES.md                  ← This file
│
└── 🔧 Setup Scripts
    ├── setup.sh                  ← Linux/Mac setup
    └── setup.bat                 ← Windows setup
```

---

## File Details

### Configuration Files

| File | Purpose | Modification |
|------|---------|--------------|
| `package.json` | Node dependencies, scripts | Update versions if needed |
| `tsconfig.json` | TypeScript settings | Usually no changes needed |
| `next.config.js` | Next.js behavior | For advanced features |
| `tailwind.config.js` | Styling configuration | Add custom colors/fonts |
| `postcss.config.js` | CSS processing | Usually no changes needed |
| `.gitignore` | Git exclusions | Usually no changes needed |

### App Files

| File | Purpose | Edit? |
|------|---------|-------|
| `app/layout.tsx` | Root wrapper, meta tags | Only for SEO updates |
| `app/page.tsx` | Main entry point | Only for section reordering |
| `app/globals.css` | Global styles, scrollbar | For color/font changes |

### Components

| Component | Purpose | Primary Use |
|-----------|---------|------------|
| Hero.tsx | 3D rotating section | Display hero visuals |
| PhotoGrid.tsx | Photo gallery | Display photo grid |
| HighlightStrip.tsx | Horizontal scroll | Featured photos |
| Message.tsx | Text reveal | Main message |
| Finale.tsx | Ending section | Closing message + confetti |

### Library Files

| File | Purpose | Customization |
|------|---------|---------------|
| `lib/data.ts` | **All content** | ⭐ Most important to edit |
| `lib/config.ts` | App settings | Fine-tune animations |
| `lib/utils.ts` | Helper functions | Advanced customization |

### Public Folder

```
public/images/
├── photo-1.jpg          ← Add your images here
├── photo-2.jpg
├── photo-3.jpg
├── photo-4.jpg
├── photo-5.jpg
├── photo-6.jpg
└── README.md            ← Image guidelines
```

---

## What to Edit (Priority Order)

### 🔴 Must Edit
1. **`lib/data.ts`** - Add your name, photos, message
2. **`public/images/`** - Add your photo files

### 🟡 Should Edit
3. **`lib/config.ts`** - Adjust animation speeds if desired
4. **`tailwind.config.js`** - Change colors if desired

### 🟢 Optional
5. **`app/globals.css`** - Custom fonts/scrollbar
6. **Component files** - Advanced customization

---

## File Sizes & Load Time

| Type | Count | Est. Size |
|------|-------|-----------|
| Components | 5 | ~15 KB |
| Configuration | 6 | ~5 KB |
| Styles | 1 | ~2 KB |
| Library | 3 | ~3 KB |
| Total (minified) | - | ~25 KB |

Plus: Your images (200-500 KB each)

---

## Development Commands

### Scripts in package.json

```json
{
  "dev": "next dev",           // Start dev server
  "build": "next build",       // Production build
  "start": "next start",       // Run production
  "lint": "next lint"          // Check code quality
}
```

### Using Commands

```bash
npm run dev    # Development server (http://localhost:3000)
npm run build  # Build for production
npm run start  # Run production build
npm run lint   # Check for issues
```

---

## Dependency Tree

```
next (14.2.0)
├── react (18.3.1)
├── react-dom (18.3.1)
├── tailwindcss (3.4.1)
│   ├── postcss (8.4.32)
│   └── autoprefixer (10.4.17)
├── framer-motion (10.16.19)
├── three (r157)
├── @react-three/fiber (8.15.12)
└── @react-three/drei (9.88.2)
```

---

## Customization Quick Reference

### Content Changes (lib/data.ts)
- Birthday name: `BIRTHDAY_NAME`
- Photo gallery: `PHOTOS` array
- Featured photos: `HIGHLIGHT_PHOTOS` array
- Main message: `MESSAGE_LINES` array
- Final message: `FINALE_TEXT`

### Visual Changes
- Colors: `tailwind.config.js`
- Animation timing: `lib/config.ts`
- Component animations: Individual `.tsx` files
- Fonts: `app/globals.css`

### Adding New Content
1. Create component in `components/`
2. Add to `app/page.tsx`
3. Use existing components as template

---

## Useful Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber/
- **Drei**: https://github.com/pmndrs/drei

---

## Common File Edits

### Add a new photo
1. Save image to `public/images/photo-X.jpg`
2. Add entry to `PHOTOS` array in `lib/data.ts`:
```typescript
{
  id: 'X',
  src: '/images/photo-X.jpg',
  alt: 'Description',
  caption: 'Your caption',
}
```

### Change colors
1. Open `tailwind.config.js`
2. Update hex colors in `colors` object:
```javascript
'dark-bg': '#0E0E10',      // Change this
'accent': '#D4D4D8',       // Or this
```

### Update animation speed
1. Open `lib/config.ts`
2. Change `ANIMATION_CONFIG`:
```typescript
animationDuration: 0.6,    // Increase for slower
staggerDelay: 0.08,        // Adjust stagger timing
```

---

## Troubleshooting File Issues

| Issue | Check | Solution |
|-------|-------|----------|
| Images not loading | `public/images/` | Verify files exist, names match |
| Wrong colors | `tailwind.config.js` | Update hex values |
| Animations slow | `lib/config.ts` | Reduce duration values |
| Build error | `package.json` | Run `npm install` again |
| TypeScript errors | `tsconfig.json` | Usually auto-fixes |

---

## Deployment File Preparation

### Before deploying, ensure:
- [ ] All photos in `public/images/`
- [ ] `lib/data.ts` fully configured
- [ ] Ran `npm run build` locally (no errors)
- [ ] Tested at `npm start`
- [ ] No uncommitted changes
- [ ] `.gitignore` excludes `node_modules/`

### Files to upload (for static hosting):
- `.next/` folder
- `public/` folder
- `package.json` (if self-hosted)

---

**Total project size: ~2-5 MB (depending on photos)**

Ready to deploy! 🚀
