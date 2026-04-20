'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

interface VideoItem {
  id: string
  src: string
  title: string
  description: string
}

const VIDEOS: VideoItem[] = [
  {
    id: 'video-1',
    src: '/images/video-1.mp4',
    title: 'Magic Moment',
    description: 'Capturing pure joy and essence',
  },
  {
    id: 'video-2',
    src: '/images/video-2.mp4',
    title: 'Radiant Energy',
    description: 'Your light shining bright',
  },
  {
    id: 'video-3',
    src: '/images/video-3.mp4',
    title: 'Graceful Motion',
    description: 'Every movement tells a story',
  },
  {
    id: 'video-4',
    src: '/images/video-4.mp4',
    title: 'Cinematic Moments',
    description: 'Beauty in motion',
  },
  {
    id: 'video-5',
    src: '/images/video-5.mp4',
    title: 'Pure Joy',
    description: 'Authentic happiness captured',
  },
  {
    id: 'video-6',
    src: '/images/video-6.mp4',
    title: 'Luminous Presence',
    description: 'Your brightness shines through',
  },
]

export default function VideoGrid() {
  const containerRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-dark-bg px-safe overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-light-text mb-8 tracking-tight">
            Moments in Motion
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-xl md:text-2xl text-light-text/70 font-light">
            Videos that capture your beauty, grace, and authentic self
          </p>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              className="group relative overflow-hidden rounded-2xl"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Video Container with overlay */}
              <div className="relative w-full aspect-square bg-dark-surface rounded-2xl overflow-hidden">
                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-dark-bg/40 to-dark-bg/80 flex items-center justify-center z-20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-10 h-10 text-dark-bg ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Video element - poster/preview */}
                <video
                  src={video.src}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  autoPlay
                  muted
                  loop
                  controls
                  preload="auto"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
              </div>

              {/* Video Info */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-bold text-light-text mb-2">{video.title}</h3>
                <p className="text-sm text-light-text/70 font-light">{video.description}</p>
              </motion.div>

              {/* Border Glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/40 transition-colors duration-300 pointer-events-none"
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['100%', '-100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="flex justify-center gap-2 mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-accent/40 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
