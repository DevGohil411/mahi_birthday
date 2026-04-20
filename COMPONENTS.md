# Component Documentation

Complete reference for all components and their customization.

## Hero Component

**File**: `components/Hero.tsx`

### Features
- 3D rotating plane using React Three Fiber
- Scroll-based parallax fade effect
- Animated title and subtitle
- Scroll indicator animation

### Customization

**Change 3D Object**
```typescript
// Replace Plane with Sphere or Box
import { Sphere } from '@react-three/drei'

<Sphere
  ref={meshRef}
  args={[1.5, 32, 32]}
  position={[0, 0, 0]}
>
  <meshBasicMaterial color="#1A1A1D" map={textureRef.current} />
</Sphere>
```

**Adjust Parallax**
```typescript
// In Hero component
const y = useTransform(scrollY, [0, 500], [0, 150]) // Change [0, 150] to adjust
```

**Change Animation Timing**
```typescript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1, delay: 0.3 }} // Adjust duration and delay
```

### Performance Notes
- 3D canvas optimized with single geometry
- Efficient lighting setup (ambient + directional)
- Rotation animation runs on RAF, not JavaScript interval

---

## PhotoGrid Component

**File**: `components/PhotoGrid.tsx`

### Features
- Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- Staggered reveal animation
- Hover scale + glow effect
- Caption overlay with gradient
- Image error handling with placeholder

### Customization

**Change Grid Columns**
```typescript
// In PhotoGrid component
<motion.div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  // Change grid-cols-1/2/3 to grid-cols-2/3/4 for different layout
>
```

**Adjust Hover Scale**
```typescript
whileHover={{ scale: 1.05 }} // Change 1.05 to desired scale (1.1 = 10% larger)
```

**Modify Stagger Effect**
```typescript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Decrease for faster stagger
      delayChildren: 0.2,
    },
  },
}
```

**Add More Caption Styles**
```typescript
<p className="text-light-text font-medium text-lg">
  {photo.caption}
</p>
// Add: text-sm, text-base, text-xl for different sizes
// Add: font-thin, font-light, font-bold for weights
```

### Adding Photos
1. Add image files to `public/images/`
2. Update `lib/data.ts` PHOTOS array:
```typescript
{
  id: '7',
  src: '/images/photo-7.jpg',
  alt: 'Photo 7',
  caption: 'Your compliment here',
}
```

---

## HighlightStrip Component

**File**: `components/HighlightStrip.tsx`

### Features
- Horizontal scrolling gallery
- Hover parallax effect
- Large image display
- Responsive sizing

### Customization

**Adjust Scroll Item Size**
```typescript
className="flex-shrink-0 h-96 w-96" // Change h-96 w-96 to h-80 w-80 for smaller
```

**Change Parallax Scale**
```typescript
whileHover={{ scale: 1.1 }} // Adjust scale multiplier
```

**Modify Stagger Delay**
```typescript
const item = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15, // Change 0.15 to adjust timing between items
      duration: 0.6,
    },
  }),
}
```

---

## Message Component

**File**: `components/Message.tsx`

### Features
- Line-by-line reveal animation
- Centered, elegant typography
- Decorative dot animation
- Flexible message content

### Customization

**Change Text Size**
```typescript
<p className="text-2xl md:text-3xl lg:text-4xl">
  // Change text-2xl/3xl/4xl for different responsive sizes
</p>
```

**Adjust Line Stagger**
```typescript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Change 0.08 to adjust reveal speed
      delayChildren: 0.2,
    },
  },
}
```

**Modify Decorative Dots**
```typescript
{[...Array(3)].map((_, i) => (
  // Change Array(3) to Array(5) for more dots
  <motion.div
    className="w-1 h-1 bg-accent rounded-full" // Adjust w-1 h-1 for size
    animate={{ scale: [1, 1.5, 1] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: i * 0.3, // Change 0.3 to adjust dot animation timing
    }}
  />
))}
```

### Updating Message Content
Edit `lib/data.ts` MESSAGE_LINES:
```typescript
export const MESSAGE_LINES = [
  "I didn't need years of memories to know",
  "you're someone rare.",
  "", // Empty string creates space
  "Your presence has an effect on people.",
  // Add or remove lines
]
```

---

## Finale Component

**File**: `components/Finale.tsx`

### Features
- Large centered headline
- Lightweight canvas-based confetti
- Interactive back-to-top button
- Smooth animations

### Customization

**Change Confetti Colors**
```typescript
const colors = ['#D4D4D8', '#A1A1AA', '#E5E5E5', '#1A1A1D']
// Add more hex colors to the array
```

**Adjust Confetti Density**
```typescript
for (let i = 0; i < 50; i++) {
  // Change 50 to increase/decrease particle count
  particles.push({...})
}
```

**Modify Confetti Gravity**
```typescript
p.vy += 0.1 // Increase for faster falling, decrease for slower
```

**Change Final Message Text**
Edit `lib/data.ts`:
```typescript
export const FINALE_TEXT = "Your custom message here."
```

**Adjust Button Styling**
```typescript
<motion.button
  className="mt-8 px-8 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10"
  // Customize colors, padding (px/py), border-radius
>
```

### Confetti Trigger
Currently triggers when section comes into view. To change:
```typescript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasTriggeredRef.current) {
        hasTriggeredRef.current = true
        // Optional: Add sound effect, etc.
      }
    },
    { threshold: 0.5 } // Change 0.5 (50% visible) to other values
  )
})
```

---

## Global Styling

**File**: `app/globals.css`

### Color Variables
```css
--dark-bg: #0E0E10;
--dark-surface: #1A1A1D;
--light-text: #E5E5E5;
--secondary-text: #A1A1AA;
--accent: #D4D4D8;
```

### Font Setup
- Using "Syne" Google Font
- Fallback: system-ui, sans-serif
- Loaded in `globals.css`

### Scrollbar Styling
```css
::-webkit-scrollbar {
  width: 8px;
}
/* Customize scrollbar colors and size here */
```

---

## Layout & Structure

**File**: `app/layout.tsx`

### Root Layout
```typescript
<html lang="en">
  <body className="bg-dark-bg text-light-text">
    {children}
  </body>
</html>
```

### Adding Meta Tags
```typescript
export const metadata: Metadata = {
  title: "Happy Birthday",
  description: "A tribute page",
  openGraph: {
    title: "Happy Birthday",
    description: "A tribute page",
    images: ['/og-image.jpg'],
  },
}
```

---

## Data & Configuration

**File**: `lib/data.ts`

### Structure
```typescript
interface Photo {
  id: string
  src: string
  alt: string
  caption: string
}
```

### Adding Content
1. Photos: Add to PHOTOS array
2. Highlights: Add to HIGHLIGHT_PHOTOS array
3. Message: Edit MESSAGE_LINES array
4. Name: Change BIRTHDAY_NAME
5. Final text: Edit FINALE_TEXT

---

## Utilities

**File**: `lib/utils.ts`

### Available Functions
- `easeOutCubic()` - Animation easing
- `calculateScroll()` - Parallax calculations
- `debounce()` - Event optimization
- `formatDate()` - Date formatting
- `isInViewport()` - Element visibility

### Usage Example
```typescript
import { debounce, isInViewport } from '@/lib/utils'

const handleResize = debounce(() => {
  // Your resize logic
}, 150)

window.addEventListener('resize', handleResize)
```

---

## Advanced Customization

### Adding a New Section
1. Create `components/NewSection.tsx`
2. Import Framer Motion for animations
3. Use existing components as template
4. Add to `app/page.tsx`:

```typescript
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <PhotoGrid />
      <NewSection /> {/* Add here */}
    </main>
  )
}
```

### Custom Animations
```typescript
import { motion, useScroll, useTransform } from 'framer-motion'

// Scroll-based
const { scrollY } = useScroll()
const opacity = useTransform(scrollY, [0, 400], [1, 0])

// Viewport-based
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.5 }}
/>
```

### 3D Customization
Use Drei helpers in Hero.tsx:
```typescript
import { Sphere, Box, Text, Float } from '@react-three/drei'
```

---

**Need more help? Check README.md or QUICK_START.md** 🎂
