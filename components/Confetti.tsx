'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  angle: number
}

export function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationIdRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = ['#D4D4D8', '#A1A1A8', '#71717A', '#E11D48', '#F97316']

    // Create initial particles
    const createParticles = () => {
      const particles: Particle[] = []
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * Math.PI * 2,
        })
      }
      return particles
    }

    particlesRef.current = createParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter((p) => p.y < canvas.height)

      particlesRef.current.forEach((p) => {
        // Update position
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1 // Gravity
        p.angle += 0.1 // Rotation

        // Opacity based on position
        const opacity = 1 - p.y / canvas.height

        // Draw rotated square
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)
        ctx.fillStyle = p.color
        ctx.globalAlpha = opacity
        ctx.fillRect(-5, -5, 10, 10)
        ctx.restore()
      })

      // Add new particles occasionally
      if (particlesRef.current.length < 30 && Math.random() > 0.7) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: -10,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * Math.PI * 2,
        })
      }

      if (particlesRef.current.length > 0) {
        animationIdRef.current = requestAnimationFrame(animate)
      }
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
