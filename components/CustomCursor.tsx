'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add trail
      setTrail((prev) => [
        ...prev.slice(-4),
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ])

      // Detect hover on interactive elements
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')

      setIsHovering(!!isClickable)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className={`fixed w-3 h-3 rounded-full pointer-events-none z-50 ${
          isHovering ? 'bg-accent scale-150' : 'bg-accent/60'
        }`}
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      {/* Outer ring */}
      <motion.div
        className={`fixed w-8 h-8 rounded-full border pointer-events-none z-50 ${
          isHovering ? 'border-accent' : 'border-accent/30'
        }`}
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      />

      {/* Trail effect */}
      {trail.map((point, idx) => (
        <motion.div
          key={point.id}
          className="fixed w-1.5 h-1.5 rounded-full bg-accent/20 pointer-events-none z-40"
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          style={{ left: point.x - 3, top: point.y - 3 }}
        />
      ))}

      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
