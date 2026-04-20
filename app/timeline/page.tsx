'use client'

import { motion } from 'framer-motion'
import { TextReveal } from '@/components/TextReveal'
import Image from 'next/image'

const timelineEvents = [
  {
    year: '2000s',
    title: 'The Beginning',
    description: 'A story started to unfold, full of potential and endless possibilities.',
    photo: '/images/photo-1.jpeg',
    side: 'left' as const,
  },
  {
    year: '2010s',
    title: 'Growing & Learning',
    description: 'Every year brought new lessons, new friendships, and unforgettable moments.',
    photo: '/images/photo-5.jpeg',
    side: 'right' as const,
  },
  {
    year: '2015',
    title: 'Finding Your Voice',
    description: 'Discovering who you truly are, without apology. Authentic. Powerful.',
    photo: '/images/photo-10.jpeg',
    side: 'left' as const,
  },
  {
    year: '2020',
    title: 'Resilience & Grace',
    description: 'Through challenges and triumphs, you showed us what real strength looks like.',
    photo: '/images/photo-15.jpeg',
    side: 'right' as const,
  },
  {
    year: '2023',
    title: 'Shining Brighter',
    description: 'Every day, you continue to inspire those around you with your presence.',
    photo: '/images/photo-25.jpeg',
    side: 'left' as const,
  },
  {
    year: 'Today',
    title: 'Another Year of Magic',
    description: 'And here we are, celebrating you. Thank you for being exactly who you are.',
    photo: '/images/photo-33.jpeg',
    side: 'right' as const,
  },
]

export default function TimelinePage() {
  return (
    <main className="relative w-full bg-dark-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-safe py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface to-dark-bg" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <motion.div className="text-center max-w-3xl relative z-10">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-light-text mb-8 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            Your Journey
          </motion.h1>

          <TextReveal
            text="A timeline of moments that shaped who you are.\nEvery chapter, a masterpiece."
            type="line"
            className="text-xl md:text-2xl text-light-text/70 font-light leading-relaxed"
            delay={0.2}
            staggerDelay={0.1}
          />
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="relative w-full py-32 px-safe">
        <div className="max-w-6xl mx-auto">
          {/* Center vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />

          {/* Events */}
          <div className="space-y-32">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${
                  event.side === 'right' ? 'md:grid-cols-2 md:[&>*:first-child]:order-2' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Image */}
                <motion.div
                  className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={event.photo}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>

                {/* Content */}
                <motion.div className="flex flex-col justify-center">
                  {/* Year with dot */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-accent"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                      {event.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-bold text-light-text mb-6 leading-tight">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-light-text/75 font-light leading-relaxed mb-8">
                    {event.description}
                  </p>

                  {/* Accent line */}
                  <motion.div
                    className="w-20 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-safe py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-dark-bg" />
        </div>

        <motion.div className="text-center max-w-3xl relative z-10">
          <TextReveal
            text="Each moment built you.\nEach experience shaped you.\nEach chapter made you who you are today.\n\nAnd we're so grateful for every single one."
            type="line"
            className="text-4xl md:text-6xl font-light text-light-text leading-relaxed space-y-6"
            delay={0.1}
            staggerDelay={0.12}
          />

          <motion.a
            href="/moments"
            className="inline-block mt-16 px-8 py-4 bg-accent text-dark-bg font-semibold rounded-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue to Moments →
          </motion.a>
        </motion.div>
      </section>
    </main>
  )
}
