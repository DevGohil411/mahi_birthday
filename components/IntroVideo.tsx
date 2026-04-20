'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { INTRO_VIDEO } from '@/lib/data'

export default function IntroVideo({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isEnded, setIsEnded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Prevent scrolling during intro
    document.body.style.overflow = 'hidden'

    const handleVideoEnd = () => {
      setIsEnded(true)
      // Fade out animation duration (800ms)
      setTimeout(() => {
        setIsVisible(false)
        document.body.style.overflow = 'auto'
        onComplete()
      }, 800)
    }

    const handleCanPlay = () => {
      // Ensure video plays when ready
      video.play().catch(() => {
        console.log('Video autoplay prevented')
      })
    }

    video.addEventListener('ended', handleVideoEnd)
    video.addEventListener('canplay', handleCanPlay)

    // Try to play immediately
    video.play().catch(() => {
      console.log('Video autoplay needs user interaction')
    })

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
      video.removeEventListener('canplay', handleCanPlay)
      document.body.style.overflow = 'auto'
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-50 bg-dark-bg w-screen h-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10 pointer-events-none" />

          {/* Video - responsive container */}
          <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 w-screen h-screen">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              autoPlay
              playsInline
              disablePictureInPicture
            >
              <source src={INTRO_VIDEO} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Scroll indicator - only show while video is playing */}
          {!isEnded && (
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <p className="text-light-text/80 text-sm md:text-base font-light tracking-widest uppercase mb-3">
                  Scroll to begin
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-accent mx-auto"
                >
                  <polyline points="5 8 10 13 15 8"></polyline>
                </svg>
              </motion.div>
            </motion.div>
          )}

          {/* Skip button */}
          {!isEnded && (
            <motion.button
              onClick={() => {
                if (videoRef.current) {
                  setIsEnded(true)
                  setTimeout(() => {
                    setIsVisible(false)
                    document.body.style.overflow = 'auto'
                    onComplete()
                  }, 800)
                }
              }}
              className="absolute top-8 right-8 z-30 px-4 md:px-6 py-2 border border-light-text/40 text-light-text/60 text-xs md:text-sm hover:text-light-text hover:border-light-text transition-all duration-300 font-light tracking-wide"
              whileHover={{ scale: 1.05, borderColor: 'rgba(229, 229, 229, 1)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              Skip
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
