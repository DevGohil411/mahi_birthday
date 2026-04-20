'use client'

import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    // Track page visits
    const trackPageVisit = () => {
      const visits = JSON.parse(localStorage.getItem('birthdayVisits') || '{}')
      const today = new Date().toISOString().split('T')[0]
      
      visits[today] = (visits[today] || 0) + 1
      
      // Track total time
      const startTime = Date.now()
      
      return () => {
        const timeSpent = (Date.now() - startTime) / 1000 // in seconds
        const analytics = JSON.parse(localStorage.getItem('birthdayAnalytics') || '{}')
        analytics.totalTimeSpent = (analytics.totalTimeSpent || 0) + timeSpent
        analytics.lastVisit = new Date().toISOString()
        analytics.visits = visits
        
        localStorage.setItem('birthdayAnalytics', JSON.stringify(analytics))
        localStorage.setItem('birthdayVisits', JSON.stringify(visits))
      }
    }

    const cleanup = trackPageVisit()

    // Track scroll depth
    let maxScrollDepth = 0

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent
        
        const analytics = JSON.parse(localStorage.getItem('birthdayAnalytics') || '{}')
        analytics.maxScrollDepth = Math.max(analytics.maxScrollDepth || 0, maxScrollDepth)
        localStorage.setItem('birthdayAnalytics', JSON.stringify(analytics))
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      cleanup()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // This component doesn't render anything - it just tracks
  return null
}
