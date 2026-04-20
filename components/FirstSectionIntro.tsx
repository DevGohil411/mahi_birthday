'use client'

import { motion } from 'framer-motion'

interface FirstSectionIntroProps {
  delay?: number
}

export function FirstSectionIntro({ delay = 0 }: FirstSectionIntroProps) {
  return (
    <motion.div
      className="absolute top-12 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <motion.div className="relative">
        {/* Badge Background with Glow */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-accent/5 rounded-full blur-lg"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Main Badge */}
        <div className="relative px-6 py-3 bg-dark-surface/80 backdrop-blur-md border border-accent/30 rounded-full">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs md:text-sm font-semibold text-accent tracking-widest">FIRST GLIMPSE</span>
            <motion.div
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
