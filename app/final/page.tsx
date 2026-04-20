'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MESSAGE_LINES, FINALE_TEXT, SECONDARY_MESSAGE } from '@/lib/data'
import { TextReveal } from '@/components/TextReveal'

export default function FinalPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.05,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <motion.main
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg flex items-center justify-center px-safe py-32"
      style={{ opacity, scale, y }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        {/* Message Lines */}
        <motion.div
          className="text-center mb-20 md:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {MESSAGE_LINES.map((line, idx) => (
            <motion.div
              key={idx}
              className="relative h-auto md:h-auto flex items-center justify-center overflow-visible py-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p
                className={`${
                  line === ''
                    ? 'h-6'
                    : 'text-2xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight'
                } text-light-text`}
              >
                {line}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-16 md:mb-24"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Finale Text with Line-by-Line Reveal */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <TextReveal
            text={FINALE_TEXT}
            type="line"
            className="text-3xl md:text-5xl lg:text-6xl font-light text-light-text leading-relaxed space-y-6"
            delay={0.2}
            staggerDelay={0.1}
          />
        </motion.div>

        {/* Decorative Separator with Animation */}
        <motion.div
          className="flex flex-col items-center gap-6 my-24 md:my-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          viewport={{ once: true }}
        >
          {/* Top decorative line */}
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          
          {/* Center sparkle */}
          <motion.div
            className="text-accent text-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨
          </motion.div>
          
          {/* Bottom decorative line */}
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Secondary Message - Beautiful closing */}
        <motion.div
          className="text-center mb-20 md:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {SECONDARY_MESSAGE.map((line, idx) => (
            <div key={`sec-${idx}`} className="relative h-auto md:h-auto flex items-center justify-center overflow-visible py-1">
              <motion.p
                className={`${
                  line === ''
                    ? 'h-6'
                    : 'text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight'
                } text-accent/90`}
                custom={idx}
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {line}
              </motion.p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/"
            className="px-8 py-4 bg-accent text-dark-bg font-semibold rounded-full hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.a>
          <motion.a
            href="/story"
            className="px-8 py-4 border border-accent/50 text-light-text font-semibold rounded-full hover:bg-accent/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Relive the Story
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-24 text-secondary-text text-sm font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          viewport={{ once: true }}
        >
          <p>Made with care, intention, and a touch of magic ✨</p>
          <p className="mt-2">Happy Birthday, Mahi 🌟</p>
        </motion.div>
      </div>
    </motion.main>
  )
}
