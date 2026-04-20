'use client'

import { motion } from 'framer-motion'

interface AnimatedLeftSidebarProps {
  delay?: number
}

export function AnimatedLeftSidebar({ delay = 0 }: AnimatedLeftSidebarProps) {
  // Create animated elements
  const elements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: Math.random() * 15,
    top: Math.random() * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 2,
    colors: ['bg-accent', 'bg-purple-500', 'bg-pink-500', 'bg-blue-500', 'bg-emerald-500'],
  }))

  return (
    <div className="absolute left-0 top-0 h-full w-20 md:w-32 pointer-events-none hidden md:block">
      {/* Vertical gradient line */}
      <motion.div
        className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-accent via-accent/30 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay }}
        viewport={{ once: true }}
      />

      {/* Animated particles on left */}
      {elements.map((el, idx) => (
        <motion.div
          key={el.id}
          className={`absolute ${el.colors[idx % el.colors.length]} rounded-full`}
          style={{
            width: el.size,
            height: el.size,
            left: `${el.left}%`,
            top: `${el.top}%`,
          }}
          initial={{ opacity: 0, scale: 0, x: -30 }}
          whileInView={{ opacity: [0, 0.6, 0.3, 0], scale: [0, 1, 1, 0], x: [0, 10, 20, 30] }}
          transition={{
            duration: el.duration,
            delay: delay + el.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          viewport={{ once: false }}
        />
      ))}

      {/* Corner accent */}
      <motion.div
        className="absolute left-0 top-0 w-16 h-16 border-t-2 border-l-2 border-accent/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
        viewport={{ once: true }}
      />
      
      <motion.div
        className="absolute left-0 bottom-0 w-16 h-16 border-b-2 border-l-2 border-accent/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.5 }}
        viewport={{ once: true }}
      />

      {/* Floating shapes */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            width: 8 + i * 4,
            height: 8 + i * 4,
            left: 5 + i * 8,
            top: 20 + i * 25,
            border: '1.5px solid rgba(251, 146, 60, 0.2)',
            borderRadius: i % 2 === 0 ? '50%' : '4px',
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + i * 2,
            delay: delay + i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}
