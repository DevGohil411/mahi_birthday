'use client'

import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { AnimatedVideo } from './AnimatedVideo'
import { MusicSyncPulse } from './MusicSyncPulse'

interface EnhancedMediaProps {
  src: string
  alt: string
  type: 'image' | 'video'
  isLeft: boolean
  idx: number
  textOverlay?: {
    title: string
    subtitle: string
  }
}

export function EnhancedMedia({ src, alt, type, isLeft, idx, textOverlay }: EnhancedMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  // Parallax effect
  const y = useMotionValue(0)
  const yParallax = useTransform(scrollY, [0, 1000], [0, 100])

  const gradientColors = [
    'from-purple-500/20 to-pink-500/20',
    'from-blue-500/20 to-cyan-500/20',
    'from-emerald-500/20 to-teal-500/20',
    'from-orange-500/20 to-red-500/20',
    'from-indigo-500/20 to-purple-500/20',
  ]

  const currentGradient = gradientColors[idx % gradientColors.length]

  return (
    <motion.div
      ref={containerRef}
      className={`relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer ${isLeft ? 'md:order-1' : 'md:order-2'}`}
      initial={{ opacity: 0, scale: 0.9, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ y: yParallax }}
    >
      {/* Background Gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${currentGradient} -z-10`}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Media Container with Hover Zoom */}
      <motion.div
        className="relative w-full h-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        {type === 'video' ? (
          <AnimatedVideo
            src={src}
            autoPlay
            muted
            loop
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={idx < 2}
          />
        )}
      </motion.div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Text Overlay (for first video) */}
      {textOverlay && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm"
        >
          <motion.div
            className="text-center text-light-text z-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-2xl md:text-3xl font-bold mb-2">{textOverlay.title}</h4>
            <p className="text-sm md:text-base text-light-text/80 max-w-xs">{textOverlay.subtitle}</p>
          </motion.div>
        </motion.div>
      )}

      {/* Music Sync Pulse */}
      {idx === 0 && <MusicSyncPulse />}

      {/* Border Glow with Animation */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-accent/10 to-accent/5 rounded-2xl -z-20 group-hover:from-accent/50 group-hover:to-accent/20"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Hover Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/30 rounded-tl-lg" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/30 rounded-br-lg" />
    </motion.div>
  )
}
