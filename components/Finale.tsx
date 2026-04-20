'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FINALE_TEXT } from '@/lib/data'

// Lightweight confetti effect
const Confetti = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      life: number
      rotation: number
      rotationSpeed: number
    }

    const particles: Particle[] = []
    const colors = ['#D4D4D8', '#A1A1AA', '#E5E5E5', '#1A1A1D', '#accent']

    // Generate confetti particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 5 + 3,
        size: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy
        p.vy += 0.15
        p.life -= 0.01
        p.rotation += p.rotationSpeed

        if (p.life <= 0 || p.y > canvas.height) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = p.life
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
        ctx.restore()
      }

      if (particles.length > 0) {
        requestAnimationFrame(animate)
      }
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  )
}

export default function Finale() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasTriggeredRef = useRef(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [100, 0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.95])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-dark-surface via-dark-bg to-dark-bg flex items-center justify-center py-32 px-safe overflow-hidden"
      style={{ opacity, y, scale }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Confetti Canvas */}
      {hasTriggeredRef.current && <Confetti />}

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Glassmorphic card background */}
        <motion.div
          className="absolute -inset-12 bg-gradient-to-br from-dark-surface/30 to-dark-surface/10 backdrop-blur-xl border border-accent/10 rounded-3xl -z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        />

        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-light-text mb-12 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {FINALE_TEXT}
        </motion.h2>

        <motion.div
          className="flex flex-col items-center gap-12 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Accent line */}
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-accent/30 via-accent to-accent/30 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          />

          <p className="text-secondary-text text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Made with care, intention, and a touch of magic. Enjoy your special day! 🌟
          </p>

          {/* Interactive CTA */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-12 px-10 py-4 border-2 border-accent text-accent font-semibold text-lg rounded-xl hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(212, 212, 216, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            ↑ Back to Top
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
