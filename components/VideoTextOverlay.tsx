'use client'

import { motion } from 'framer-motion'

interface VideoTextOverlayProps {
  title: string
  subtitle: string
  delay?: number
}

export function VideoTextOverlay({ title, subtitle, delay = 0 }: VideoTextOverlayProps) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20"
        animate={{ opacity: 1 }}
      />

      {/* Text Content */}
      <motion.div className="relative z-10">
        {/* Title */}
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-light-text mb-8 leading-tight max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          {title}
        </motion.h2>

        {/* Accent Line */}
        <motion.div
          className="h-2 w-32 bg-gradient-to-r from-accent to-accent/30 rounded-full mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ originX: 0 }}
        />

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-light-text/90 font-light leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>

        {/* Dots */}
        <motion.div
          className="flex gap-4 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-accent rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                delay: 1 + i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
