'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface AnimatedVideoProps {
  src: string
  poster?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  className?: string
  onPlay?: () => void
  onPause?: () => void
}

export function AnimatedVideo({
  src,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  className = '',
  onPlay,
  onPause,
}: AnimatedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [hasError, setHasError] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    onPlay?.()
  }

  const handlePause = () => {
    setIsPlaying(false)
    onPause?.()
  }

  const handleError = () => {
    setHasError(true)
    console.error(`Failed to load video: ${src}`)
  }

  return (
    <motion.div
      className="relative w-full h-full overflow-hidden rounded-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {hasError ? (
        <div className="w-full h-full bg-gradient-to-br from-dark-surface to-dark-bg flex items-center justify-center">
          <p className="text-light-text/50">Video unavailable</p>
        </div>
      ) : (
        <>
          {/* Video Container with Parallax on Hover */}
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              playsInline
              onPlay={handlePlay}
              onPause={handlePause}
              onError={handleError}
              className={`w-full h-full object-cover ${className}`}
            />
          </motion.div>

          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />

          {/* Play Button Indicator (if paused) */}
          {!isPlaying && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-accent/80 flex items-center justify-center backdrop-blur"
                whileHover={{ scale: 1.2, backgroundColor: 'rgb(244, 63, 94)' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg
                  className="w-8 h-8 text-dark-bg fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </motion.div>
          )}

          {/* Video Badge */}
          <motion.div
            className="absolute top-4 right-4 px-4 py-2 bg-accent/80 text-dark-bg text-xs font-bold rounded-full backdrop-blur flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>▶</span>
            <span>VIDEO</span>
          </motion.div>
        </>
      )}
    </motion.div>
  )
}
