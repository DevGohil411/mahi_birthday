'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// 🎵 PASTE CYBERPUNK EDGERUNNERS LYRICS HERE
// Just paste all the lyrics between the backticks - keep line breaks as they are
const LYRICS = `I couldn't wait for you to come clear the cupboards
But now you're going to leave with nothing but a sign
Another evening I'll be sitting reading in between your lines
Because I miss you all the time`

// Song metadata
const SONG_INFO = {
  title: 'Cyberpunk: Edgerunners',
  artist: 'Meranam Likhna',
  subtitle: 'A song that feels like your soul',
}

export default function SongLyrics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [100, 0, 0, -100])

  const lines = LYRICS.split('\n')

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg flex items-center justify-center py-32 px-safe overflow-hidden"
      style={{ opacity, y }}
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-bold text-light-text mb-4">
            Cyberpunk: Edgerunners
          </h2>
          <p className="text-lg text-accent font-light">
            A song that feels like your soul
          </p>
          <p className="text-secondary-text mt-2">
            Artist: Meranam Likhna
          </p>
        </motion.div>

        {/* Lyrics */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {lines.map((line, idx) => (
            <motion.div
              key={`${idx}-${line}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.05,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative"
            >
              {line === '' ? (
                <div className="h-4" />
              ) : (
                <>
                  {/* Golden accent line for certain verses */}
                  {line.includes('get away') || line.includes('Turn away') ? (
                    <motion.div
                      className="absolute -left-8 top-1/2 w-6 h-1 bg-gradient-to-r from-accent/50 to-accent/0"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                    />
                  ) : null}

                  <p
                    className={`text-light-text leading-relaxed font-light
                      ${
                        line.startsWith("'Cause I really") ||
                        line.startsWith('And I') ||
                        line.startsWith('So when you')
                          ? 'text-accent/90'
                          : 'text-secondary-text'
                      }
                    `}
                  >
                    {line}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer message */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-secondary-text italic">
            "There's something about how this song captures the essence of longing and letting go."
          </p>
          <motion.div
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            viewport={{ once: true }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
