'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useAudio } from '@/context/AudioContext'

export function MusicSyncPulse() {
  const { currentTime } = useAudio()
  const [beatIndex, setBeatIndex] = useState(0)

  // Define beat moments in song (every ~2 seconds for smooth effect)
  useEffect(() => {
    const newBeatIndex = Math.floor(currentTime / 2)
    if (newBeatIndex !== beatIndex) {
      setBeatIndex(newBeatIndex)
    }
  }, [currentTime, beatIndex])

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{
        opacity: [0.5, 0, 0.5],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      key={beatIndex}
    >
      <div className="absolute inset-0 border border-accent/20 rounded-2xl" />
    </motion.div>
  )
}
