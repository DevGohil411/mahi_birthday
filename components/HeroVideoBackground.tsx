'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface HeroVideoProps {
  videoSrc?: string
  posterImage?: string
  children?: React.ReactNode
}

export function HeroVideoBackground({ videoSrc, posterImage, children }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = videoRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Video/Image Background with Parallax */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      >
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterImage}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg" />
        )}
      </motion.div>

      {/* Dark Overlay with Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-safe">
        {children}
      </div>
    </section>
  )
}
