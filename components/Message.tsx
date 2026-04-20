'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { MESSAGE_LINES } from '@/lib/data'
import { useRef } from 'react'

export default function Message() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [100, 0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.95])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-dark-bg via-dark-bg to-dark-surface flex items-center justify-center py-32 px-safe overflow-hidden"
      style={{ opacity, y, scale }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center space-y-0">
          {MESSAGE_LINES.map((line, idx) => (
            <motion.div
              key={`${idx}-${line}`}
              variants={lineVariants}
              className="mb-4"
            >
              {line === '' ? (
                <div className="h-8" />
              ) : (
                <p className="text-4xl md:text-6xl lg:text-7xl leading-tight font-light text-light-text tracking-tight">
                  {line}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative divider */}
        <motion.div
          className="flex justify-center gap-3 mt-24"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-accent rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
