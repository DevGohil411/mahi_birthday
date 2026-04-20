'use client'

import { motion } from 'framer-motion'

interface HandwrittenTextProps {
  text: string
  delay?: number
}

export function HandwrittenText({ text, delay = 0 }: HandwrittenTextProps) {
  return (
    <motion.div
      className="inline-block"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, type: 'spring' }}
      viewport={{ once: true }}
      style={{ fontFamily: 'cursive' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
      `}</style>
      <p className="text-3xl md:text-5xl font-light text-accent" style={{ fontFamily: 'Caveat, cursive' }}>
        {text}
      </p>
    </motion.div>
  )
}
