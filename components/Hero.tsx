'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import { BIRTHDAY_NAME } from '@/lib/data'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.05])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark-bg flex flex-col items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale }}
      >
        <Image
          src="/images/hero-bg.jpeg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dramatic Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 pointer-events-none z-10" />
      
      {/* Additional gradient for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none z-10" />

      {/* Accent gradient lines */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none z-5" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none z-5" />

      {/* Content with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6"
      >
        {/* Decorative top accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-7xl md:text-9xl font-bold text-light-text tracking-tighter leading-none mb-6">
            Happy <br />
            <span className="bg-gradient-to-r from-accent via-accent to-accent/70 bg-clip-text text-transparent">
              Birthday
            </span>
          </h1>
        </motion.div>

        {/* Name with accent */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold text-accent mt-8 tracking-tight"
        >
          {BIRTHDAY_NAME}
        </motion.h2>

        {/* Decorative separator */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 80, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-accent to-accent/40 rounded-full my-10"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="text-secondary-text text-lg md:text-2xl text-center max-w-3xl leading-relaxed font-light"
        >
          You deserve a day as special as you are
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="text-secondary-text/70 text-base md:text-lg text-center max-w-2xl mt-6 leading-relaxed font-light"
        >
          A celebration of every beautiful moment we've shared
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-secondary-text/60 text-sm font-light">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-accent/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
