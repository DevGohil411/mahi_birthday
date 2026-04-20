// Utility functions for animations and effects

export const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3)
}

export const easeInOutQuad = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

// Calculate scroll position for parallax
export const calculateScroll = (
  scrollY: number,
  elementOffset: number,
  range: number
): number => {
  const scrollRange = scrollY - elementOffset
  return Math.min(Math.max(scrollRange / range, 0), 1)
}

// Debounce function for resize events
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Format date (if needed for birthday display)
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}

// Check if element is in viewport
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  )
}
