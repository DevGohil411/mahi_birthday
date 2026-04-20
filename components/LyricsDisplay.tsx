'use client'

import { motion } from 'framer-motion'
import { useAudio } from '@/context/AudioContext'

export function LyricsDisplay() {
  const { currentTime, lyrics } = useAudio()

  // Find current lyric
  let activeLyric = ''
  for (let i = lyrics.length - 1; i >= 0; i--) {
    if (currentTime >= lyrics[i].time) {
      activeLyric = lyrics[i].text
      break
    }
  }

  return (
    <motion.div
      className="fixed bottom-12 right-8 z-30 max-w-xs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.p
        className="text-light-text/80 text-sm md:text-base font-light leading-relaxed italic"
        key={activeLyric}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        ♪ {activeLyric || 'Music playing...'}
      </motion.p>

      {/* Subtle animated accent dot */}
      <motion.div
        className="flex gap-1 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-accent/50 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
