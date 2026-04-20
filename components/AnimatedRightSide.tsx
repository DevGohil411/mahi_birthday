'use client'

import { motion } from 'framer-motion'

interface AnimatedRightSideProps {
  delay?: number
}

export function AnimatedRightSide({ delay = 0 }: AnimatedRightSideProps) {
  // Floating text elements
  const textElements = [
    { text: '✨', top: '15%', rotate: -15 },
    { text: '◆', top: '35%', rotate: 45 },
    { text: '✦', top: '55%', rotate: -30 },
    { text: '●', top: '75%', rotate: 60 },
  ]

  return (
    <div className="absolute right-0 top-0 h-full w-20 md:w-32 pointer-events-none hidden md:block">
      {/* Vertical gradient line */}
      <motion.div
        className="absolute right-8 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-accent/30 to-accent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay }}
        viewport={{ once: true }}
      />

      {/* Floating text elements */}
      {textElements.map((el, idx) => (
        <motion.div
          key={idx}
          className="absolute text-accent/40 text-xl md:text-2xl"
          style={{ top: el.top, right: 10 }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: el.rotate }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + idx,
            delay: delay + idx * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          viewport={{ once: true }}
        >
          {el.text}
        </motion.div>
      ))}

      {/* Top-right corner accent */}
      <motion.div
        className="absolute right-0 top-0 w-16 h-16 border-t-2 border-r-2 border-accent/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
        viewport={{ once: true }}
      />

      {/* Bottom-right corner accent */}
      <motion.div
        className="absolute right-0 bottom-0 w-16 h-16 border-b-2 border-r-2 border-accent/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.5 }}
        viewport={{ once: true }}
      />

      {/* Animated rotating shapes */}
      {[0, 1].map((i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            width: 12 + i * 6,
            height: 12 + i * 6,
            right: 8 + i * 12,
            top: 40 + i * 30,
            border: '1.5px solid rgba(251, 146, 60, 0.15)',
            borderRadius: '50%',
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + i * 3,
            delay: delay + i * 0.5,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}
