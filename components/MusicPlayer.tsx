'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useAudio } from '@/context/AudioContext'

export function MusicPlayer() {
  const { isPlaying, currentTime, duration, togglePlay } = useAudio()
  const [showPlayer, setShowPlayer] = useState(false)

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const progressPercent = duration ? (currentTime / duration) * 100 : 0

  return (
    <>
      {/* Music Player Toggle Button - Mobile */}
      <motion.button
        onClick={() => setShowPlayer(!showPlayer)}
        className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-accent text-dark-bg rounded-full flex items-center justify-center font-bold shadow-lg hover:shadow-xl transition-shadow md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Toggle Music Player"
      >
        {isPlaying ? '🎵' : '🎶'}
      </motion.button>

      {/* Music Player Panel - Mobile */}
      <AnimatePresence>
        {showPlayer && (
          <motion.div
            className="fixed bottom-24 left-8 z-40 bg-dark-surface/95 backdrop-blur-md rounded-xl p-4 w-72 shadow-2xl border border-accent/20"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-light-text font-semibold text-sm">🎵 Birthday Vibes</h3>
              <button
                onClick={() => setShowPlayer(false)}
                className="text-light-text/50 hover:text-light-text transition-colors"
              >
                ✕
              </button>
            </div>

            <motion.button
              onClick={togglePlay}
              className="w-full py-3 bg-accent/20 hover:bg-accent/30 border border-accent/50 rounded-lg text-accent font-semibold transition-all mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </motion.button>

            <div className="mb-2">
              <div className="w-full h-1 bg-dark-bg rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-accent/50"
                  style={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            <div className="flex justify-between text-xs text-light-text/60">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Mini Player - Top Right */}
      <motion.div
        className="fixed top-32 right-8 hidden lg:block z-40 bg-dark-surface/95 backdrop-blur-md rounded-xl p-4 w-80 shadow-2xl border border-accent/20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-light-text font-semibold text-sm">🎵 Birthday Vibes</h3>
        </div>

        <motion.button
          onClick={togglePlay}
          className="w-full py-2 bg-accent/20 hover:bg-accent/30 border border-accent/50 rounded-lg text-accent text-sm font-semibold transition-all mb-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </motion.button>

        <div className="w-full h-0.5 bg-dark-bg rounded-full overflow-hidden mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-accent/50"
            style={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="flex justify-between text-xs text-light-text/60">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </motion.div>
    </>
  )
}
