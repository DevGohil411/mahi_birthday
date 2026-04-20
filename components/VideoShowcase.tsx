'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface AnimatedVideoCardProps {
  videoSrc: string
  title: string
  description: string
  duration?: number
  delay?: number
}

export function AnimatedVideoCard({
  videoSrc,
  title,
  description,
  duration = 0.8,
  delay = 0,
}: AnimatedVideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      className="relative group h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay, type: 'spring', stiffness: 100 }}
      viewport={{ once: true, amount: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Background */}
      <video
        src={videoSrc}
        className="w-full h-full object-cover"
        autoPlay={isPlaying}
        muted
        loop
        playsInline
      />

      {/* Overlay - Slides in on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content - Fades in on hover */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-light-text mb-2">{title}</h3>
        <p className="text-light-text/70 text-sm leading-relaxed">{description}</p>
      </motion.div>

      {/* Play Button - Center on hover */}
      <motion.button
        className="absolute inset-0 flex items-center justify-center"
        onClick={() => setIsPlaying(!isPlaying)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center backdrop-blur"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-10 h-10 text-dark-bg fill-current ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.div>
      </motion.button>

      {/* Border Glow - Animated on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-accent"
        animate={{
          boxShadow: isHovered
            ? '0 0 30px rgba(244, 63, 94, 0.5)'
            : '0 0 0px rgba(244, 63, 94, 0)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

// Full-page video showcase
export function AnimatedVideoShowcase() {
  const videos = [
    {
      src: '/images/video-1.mp4',
      title: 'Pure Magic',
      description: 'Capturing the essence of authentic moments',
    },
    {
      src: '/images/video-2.mp4',
      title: 'Grace in Motion',
      description: 'Every frame tells a story',
    },
    {
      src: '/images/video-3.mp4',
      title: 'Radiant Energy',
      description: 'A celebration of presence',
    },
  ]

  return (
    <section className="relative w-full py-24 px-safe bg-dark-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-light-text mb-6">
            Video Moments
          </h2>
          <p className="text-xl text-light-text/70">
            Hover to play • Click to experience
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <AnimatedVideoCard
              key={idx}
              videoSrc={video.src}
              title={video.title}
              description={video.description}
              delay={idx * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
