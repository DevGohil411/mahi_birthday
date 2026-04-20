'use client'

import { motion } from 'framer-motion'
import { TextReveal } from './TextReveal'

interface CinematicTextProps {
  text: string
  delay?: number
  theme?: 'dark' | 'light'
}

export function CinematicText({ text, delay = 0, theme = 'dark' }: CinematicTextProps) {
  return (
    <section
      className={`relative min-h-screen w-full flex items-center justify-center px-safe py-32 pb-32 ${
        theme === 'dark' ? 'bg-dark-bg' : 'bg-light-text'
      }`}
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-dark-surface to-dark-bg'
              : 'bg-gradient-to-b from-gray-50 to-white'
          }`}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-accent/8' : 'bg-accent/5'
          }`}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-3xl text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <TextReveal
          text={text}
          type="line"
          className={`text-4xl md:text-6xl font-light leading-relaxed ${
            theme === 'dark' ? 'text-light-text' : 'text-dark-bg'
          }`}
          delay={delay + 0.1}
          staggerDelay={0.1}
        />
      </motion.div>
    </section>
  )
}
