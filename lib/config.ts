// Environment and build configuration
// This file contains settings for different environments

export const ENVIRONMENT = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}

// Image optimization settings
export const IMAGE_CONFIG = {
  maxWidth: 1200,
  maxHeight: 1200,
  quality: 75,
  formats: ['image/avif', 'image/webp'],
}

// Animation settings
export const ANIMATION_CONFIG = {
  // Parallax multiplier (higher = more parallax effect)
  parallaxMultiplier: 0.5,
  
  // Stagger delay between animations (in seconds)
  staggerDelay: 0.08,
  
  // Default animation duration (in seconds)
  animationDuration: 0.6,
  
  // Easing function (Framer Motion easing)
  easing: 'easeOut',
}

// 3D Scene settings
export const SCENE_CONFIG = {
  // Camera position
  cameraPosition: [0, 0, 5] as [number, number, number],
  
  // Ambient light intensity
  ambientLightIntensity: 0.5,
  
  // Directional light intensity
  directionalLightIntensity: 0.8,
  
  // Rotation speed (smaller = slower)
  rotationSpeed: 0.001,
}

// Confetti settings
export const CONFETTI_CONFIG = {
  particleCount: 50,
  colors: ['#D4D4D8', '#A1A1AA', '#E5E5E5', '#1A1A1D'],
  maxVelocity: 4,
  gravity: 0.1,
  fadeSpeed: 0.01,
}

// Performance settings
export const PERFORMANCE_CONFIG = {
  // Enable image lazy loading
  lazyLoadImages: true,
  
  // Image loading placeholder
  imageBlur: true,
  
  // Viewport intersection observer threshold
  observerThreshold: 0.1,
  
  // Debounce delay for resize events (ms)
  resizeDebounce: 150,
}

// SEO and metadata
export const SEO_CONFIG = {
  title: 'Happy Birthday',
  description: 'A tribute page made just for you',
  ogImage: '/og-image.jpg',
}
