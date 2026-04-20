'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface Heart {
  id: number
  x: number
  y: number
}

interface Sparkle {
  id: number
  x: number
  y: number
}

interface TrailPoint {
  x: number
  y: number
  id: number
}

export function EasterEggs() {
  const [konami, setKonami] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [hearts, setHearts] = useState<Heart[]>([])
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([])
  const heartCountRef = useRef(0)
  const sparkleCountRef = useRef(0)
  const trailCountRef = useRef(0)
  const lastMousePosRef = useRef({ x: 0, y: 0 })

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

  // Konami code listener
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setKonami((prev) => {
        const newSequence = [...prev, e.key]
        
        // Check if matches konami code
        if (newSequence.slice(-konamiCode.length).join(',') === konamiCode.join(',')) {
          setShowEasterEgg(true)
          triggerRandomConfetti()
          setTimeout(() => setShowEasterEgg(false), 5000)
          return []
        }

        // Keep only last 10 keys
        if (newSequence.length > 10) return newSequence.slice(-10)
        return newSequence
      })
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Double click logo listener
  useEffect(() => {
    let clickCount = 0
    let clickTimer: NodeJS.Timeout

    const handleLogoClick = () => {
      clickCount++
      if (clickCount === 1) {
        clickTimer = setTimeout(() => (clickCount = 0), 300)
      }
      if (clickCount === 2) {
        clearTimeout(clickTimer)
        setShowEasterEgg(true)
        triggerRandomConfetti()
        setTimeout(() => setShowEasterEgg(false), 5000)
        clickCount = 0
      }
    }

    const logo = document.querySelector('a[href="/"]')
    if (logo) {
      logo.addEventListener('click', handleLogoClick)
      return () => logo.removeEventListener('click', handleLogoClick)
    }
  }, [])

  // Click anywhere to create hearts
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Trigger hearts from click position
      for (let i = 0; i < 5; i++) {
        const newHeart: Heart = {
          id: heartCountRef.current++,
          x: e.clientX,
          y: e.clientY,
        }
        setHearts((prev) => [...prev, newHeart])
        
        // Remove heart after animation
        setTimeout(() => {
          setHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
        }, 1500)
      }
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  // Random confetti bursts
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.92) {
        // 8% chance every frame
        triggerRandomConfetti()
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  // Mouse movement for rainbow trail and sparkles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosRef.current = { x: e.clientX, y: e.clientY }

      // Add trail point
      if (Math.random() > 0.7) {
        const newTrail: TrailPoint = {
          x: e.clientX,
          y: e.clientY,
          id: trailCountRef.current++,
        }
        setTrailPoints((prev) => [...prev.slice(-20), newTrail])
      }

      // Add sparkle on hover
      if (Math.random() > 0.85) {
        const newSparkle: Sparkle = {
          id: sparkleCountRef.current++,
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
        }
        setSparkles((prev) => [...prev, newSparkle])

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id))
        }, 1200)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const triggerRandomConfetti = () => {
    for (let i = 0; i < 20; i++) {
      const newSparkle: Sparkle = {
        id: sparkleCountRef.current++,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }
      setSparkles((prev) => [...prev, newSparkle])

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id))
      }, 2000)
    }
  }

  const rainbowColors = ['#ff6b6b', '#ffa500', '#ffd700', '#00ff00', '#00bfff', '#4169e1', '#9370db']

  return (
    <>
      {/* Rainbow Trail */}
      <svg className="fixed inset-0 pointer-events-none z-40 w-full h-full">
        {trailPoints.map((point, idx) => (
          <motion.circle
            key={point.id}
            cx={point.x}
            cy={point.y}
            r="3"
            fill={rainbowColors[idx % rainbowColors.length]}
            opacity={0.6 * (1 - idx / trailPoints.length)}
          />
        ))}
      </svg>

      {/* Sparkles on Hover */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="fixed pointer-events-none z-40"
          style={{ left: sparkle.x, top: sparkle.y }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0, y: -50 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="text-2xl">✨</div>
        </motion.div>
      ))}

      {/* Hearts on Click */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="fixed pointer-events-none z-40"
          style={{ left: heart.x, top: heart.y }}
          initial={{ opacity: 1, scale: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: 1.2,
            y: -100,
            x: (Math.random() - 0.5) * 100,
          }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="text-4xl">❤️</div>
        </motion.div>
      ))}

      {/* Easter Egg Pop-up */}
      {showEasterEgg && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <motion.div
              className="text-8xl mb-6"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              ✨🎉✨
            </motion.div>
            <p className="text-3xl font-bold text-accent mb-4">You found an Easter Egg!</p>
            <p className="text-xl text-light-text/70">
              Happiness overload! Keep clicking for more magic 💫
            </p>
          </motion.div>

          {/* Burst Confetti */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`burst-${i}`}
              className="fixed w-3 h-3 rounded-full"
              style={{
                backgroundColor: rainbowColors[i % rainbowColors.length],
              }}
              initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
                opacity: 0,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 0.8,
                ease: 'easeIn',
              }}
            />
          ))}
        </motion.div>
      )}
    </>
  )
}
