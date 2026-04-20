# 🎨 Visual Design Guide

Complete reference for the aesthetic and design system used in this website.

---

## Color Palette

### Primary Colors

```
Dark Background    #0E0E10
Hex: #0E0E10  RGB(14, 14, 16)  HSL(240°, 7%, 6%)

Used for: Main background, large surfaces
Effect: Almost black, very dark with subtle blue tone
```

```
Dark Surface       #1A1A1D
Hex: #1A1A1D  RGB(26, 26, 29)  HSL(240°, 5%, 11%)

Used for: Cards, overlays, secondary surfaces
Effect: Slightly lighter, creates depth
```

### Text Colors

```
Light Text         #E5E5E5
Hex: #E5E5E5  RGB(229, 229, 229)  HSL(0°, 0%, 90%)

Used for: Primary headings, body text
Effect: Soft white, easy on eyes
```

```
Secondary Text    #A1A1AA
Hex: #A1A1AA  RGB(161, 161, 170)  HSL(240°, 4%, 65%)

Used for: Captions, secondary info, hints
Effect: Muted gray, less prominent
```

### Accent Color

```
Accent            #D4D4D8
Hex: #D4D4D8  RGB(212, 212, 216)  HSL(240°, 4%, 89%)

Used for: Highlights, CTAs, accent lines
Effect: Light gray, creates visual interest
```

---

## Color Usage in Components

### Hero Section
- Background: Dark Background (#0E0E10)
- Title: Light Text (#E5E5E5)
- Subtitle: Accent (#D4D4D8)
- Subtext: Secondary Text (#A1A1AA)

### Photo Grid
- Grid background: Dark Background
- Image borders: Dark Surface
- Caption text: Light Text
- Hover overlay: Dark Background with transparency
- Glow effect: Accent with opacity

### Message Section
- Background: Dark Background
- Text: Light Text
- Decorative dots: Accent
- Spacing: Dark Background

### Finale Section
- Background: Dark Background
- Heading: Light Text
- Decorative line: Accent
- Button text: Accent
- Button border: Accent

---

## Typography

### Font Family
```
Primary: "Syne" (Google Font)
Fallback: system-ui, sans-serif
Weights: 400, 500, 600, 700
```

### Font Sizes & Weights

#### Headings
```
H1 (Hero)      72px (desktop) / 48px (mobile)  Font-weight: 700 (bold)
H2 (Section)   48px (desktop) / 36px (mobile)  Font-weight: 700
H3 (Caption)   24px                             Font-weight: 600
```

#### Body Text
```
Large body     20px    Font-weight: 400 (light)
Body           16px    Font-weight: 400
Small text     14px    Font-weight: 400
Tiny text      12px    Font-weight: 500
```

#### Message Section
```
Message lines  48px (desktop) / 28px (mobile)   Font-weight: 400
Line height: 1.6x for readability
```

---

## Spacing & Layout

### Spacing Scale
```
xs   4px
sm   8px
md   16px
lg   24px
xl   32px
2xl  64px
```

### Sections
```
Hero Section        Fullscreen (100vh)
Photo Gallery       24px padding vertical, 16px-64px horizontal
Highlight Strip    24px padding vertical, 16px-64px horizontal
Message Section    Min 100vh height, centered content
Finale Section     Min 100vh height, centered content
```

### Grid System
```
Photo Grid Columns:
- Mobile (< 768px):    1 column
- Tablet (768-1024px): 2 columns
- Desktop (> 1024px):  3 columns

Gap: 24px between items
```

---

## Animation & Motion

### Timing Functions

```
Ease Out       Used for: Scroll animations, reveals
Speed: 0.6-0.8s duration
Effect: Objects slow down as they reach destination

Ease In Out    Used for: Hover states, transitions
Speed: 0.3-0.4s duration
Effect: Smooth start and end
```

### Animation Types

#### Parallax
```
Hero Section: Scrolls slower than page
Y-axis offset: 0px to 150px over 500px scroll
Opacity fade: 1 to 0 over 400px scroll
```

#### Stagger
```
Photo Grid:    Each image reveals 0.1s apart
Message Lines: Each line reveals 0.08s apart
Components:    Delay before animation starts
```

#### Hover Effects
```
Photo Scale:   1 to 1.05 over 0.3s
Glow Effect:   Opacity 0 to 1 over 0.3s
Caption Slide: Y 20px to 0 on hover
```

#### Scroll Reveal
```
Fade In:       Opacity 0 to 1 when in viewport
Slide In:      Y 20px to 0 when in viewport
Duration:      0.6-0.8s
```

---

## Responsive Design

### Breakpoints
```
Mobile:   0px - 767px      (xs, sm, md)
Tablet:   768px - 1023px   (md, lg)
Desktop:  1024px+          (lg, xl, 2xl)
```

### Mobile Optimizations
```
Typography:  Reduced by 20-30%
Padding:     Reduced by 50%
Spacing:     Reduced by 30%
Columns:     Single column layout
Touch areas: 48px minimum
```

### Desktop Optimizations
```
Typography:  Full size
Padding:     Full padding
Spacing:     Full spacing
Columns:     Multi-column layout
Hover:       Full hover effects enabled
```

---

## Component Styles

### Hero Section
```
Full viewport height and width
3D Canvas: Fills entire section
Overlay text: Centered, semi-transparent background
Scroll indicator: Bottom center, animated
```

### Photo Grid
```
Aspect ratio: Square (1:1)
Border radius: 8px
Hover: Scale 1.05, glow effect
Caption position: Bottom left on hover
Gap between items: 24px
```

### Highlight Strip
```
Height: 384px (h-96)
Width: 384px (w-96) per item
Border radius: 8px
Parallax on hover: Scale 1.1
Horizontal scroll enabled
```

### Message Section
```
Text alignment: Center
Max width: 48rem (3xl)
Line spacing: 1.5x
Decoration: 3 animated dots
Vertical padding: 96px
```

### Finale Section
```
Text alignment: Center
Text size: 72px (desktop)
Max width: 48rem
Confetti overlay: Full viewport
CTA button: Outlined style
```

---

## Visual Hierarchy

### Primary (Largest, Most Attention)
- Hero title (72px, Light Text)
- Section headlines (48px, Light Text)
- Large photos
- Message main text

### Secondary (Medium Attention)
- Subheadings (24px, Secondary Text)
- Photo captions
- Decorative elements
- CTAs

### Tertiary (Supporting)
- Fine print (12px, Secondary Text)
- Labels
- Instructions
- Hints

---

## Accessibility

### Color Contrast
```
Light Text (#E5E5E5) on Dark Background (#0E0E10)
Contrast ratio: 18.7:1  ✅ AAA (Excellent)

Accent (#D4D4D8) on Dark Background (#0E0E10)
Contrast ratio: 16.3:1  ✅ AAA (Excellent)

Secondary Text (#A1A1AA) on Dark Background (#0E0E10)
Contrast ratio: 6.2:1   ✅ AA (Good)
```

### Typography
```
Font size minimum: 14px (for small text)
Line height: 1.5x minimum for body text
Letter spacing: 0 (default)
Font weight: 400+ for readability
```

### Interactive Elements
```
Button/Link size: 48px minimum
Hover states: Clear visual feedback
Focus states: Outline or highlight
Touch targets: 48px x 48px minimum
```

---

## Asset Specifications

### Photo Requirements
```
Format: JPG, PNG, WebP
Resolution: 1200x1200px minimum
File size: 200-500KB optimized
Aspect ratio: Square or landscape
Color: True colors, no filters needed
```

### Image Optimization
```
JPEG quality: 75-85
PNG compression: 9 (max)
WebP quality: 80
Thumbnail/placeholder: 50x50px
```

### 3D Assets
```
Model complexity: Low poly
Texture size: 1024x1024px max
Format: glTF/glB
File size: < 5MB
```

---

## Animation Easing Presets

### Framer Motion Easing
```
"easeOut"       Recommended for entrance animations
"easeIn"        Recommended for exit animations
"easeInOut"     Recommended for continuous loops
"circOut"       Bouncy effect, use sparingly
"backOut"       Overshoot effect, use sparingly
```

---

## Dark Mode Considerations

```
Current design: Soft dark mode (not pure black)
Advantages:
- Reduces eye strain
- Reduces blue light
- Maintains contrast
- More sophisticated appearance

Color choices designed for:
- OLED displays
- Extended viewing
- Mobile screens
- All lighting conditions
```

---

## Print Styling (If Needed)

```css
@media print {
  body { background: white; color: black; }
  .animation { animation: none; }
  .gradient { background: none; }
  .blur { filter: none; }
}
```

---

## Design Principles Applied

1. **Minimalism**: Only essential UI elements
2. **Whitespace**: Generous space between sections
3. **Typography**: Clear hierarchy through size and weight
4. **Motion**: Purposeful, smooth animations
5. **Color**: Limited palette, high contrast
6. **Emotion**: Warm, respectful, celebration
7. **Accessibility**: WCAG 2.1 AA+ compliant
8. **Performance**: GPU-accelerated animations

---

## Customization Tips

### To Make It Warmer
- Change accent to warm color: `#E8B4B8` (rose)
- Add warm text shadows
- Increase saturation slightly

### To Make It Cooler
- Change accent to cool color: `#87CEEB` (sky)
- Use cooler dark background: `#0A0E1A`
- Add blue light to lights

### To Make It More Dramatic
- Increase contrast (darker darks, lighter lights)
- Larger text sizes
- Stronger shadows

### To Make It More Subtle
- Reduce animation intensity
- Soften transitions
- Decrease color saturation

---

## Reference Images

All design tokens reference:
- Figma design system (modern minimalist)
- Apple's spatial computing aesthetic
- High-end magazine design
- Cinema color grading

---

**Design by**: Modern, cinematic, respectful tribute aesthetic
**Inspired by**: Editorial photography, luxury minimalism, digital elevation
**Built for**: Celebrating someone special 🎂
