'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import { STORY_PHOTOS } from '@/lib/data'
import { useRef } from 'react'

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={containerRef} className="relative w-full bg-dark-bg">
      {/* Section header with consistent spacing */}
      <div className="max-w-7xl mx-auto px-safe py-32">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold text-light-text mb-8 tracking-tight">
            Your Story
          </h2>
          <motion.div
            className="h-1.5 w-40 bg-gradient-to-r from-accent to-accent/30 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Story grid with alternating layout */}
      <div className="max-w-7xl mx-auto px-safe space-y-40 pb-32">
        {STORY_PHOTOS.map((photo, idx) => {
          const isLeft = idx % 2 === 0
          
          // Parallax effect - slower movement
          const yOffset = useTransform(
            scrollYProgress,
            [idx * 0.08, (idx + 1) * 0.08 + 0.1],
            [100, -100]
          )

          return (
            <motion.div
              key={photo.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Image Container */}
              <motion.div
                className={`relative h-96 md:h-[550px] rounded-2xl overflow-hidden group ${
                  !isLeft ? 'md:order-2' : ''
                }`}
                initial={{
                  opacity: 0,
                  x: isLeft ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                style={{ y: yOffset }}
              >
                {/* Image with subtle rotation and shadow */}
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    rotate: `${(idx % 2 === 0 ? 1 : -1.5)}deg`,
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover rounded-2xl"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%231A1A1D" width="400" height="400"/%3E%3C/svg%3E'
                    }}
                  />
                </motion.div>

                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent pointer-events-none rounded-2xl" />

                {/* Layered shadow effect */}
                <motion.div
                  className="absolute -inset-6 bg-accent/15 rounded-2xl blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>

              {/* Text Container */}
              <motion.div
                className={`text-center md:text-left ${!isLeft ? 'md:order-1' : ''}`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-light-text mb-6">
                  {photo.caption}
                </h3>
                <p className="text-lg text-secondary-text leading-relaxed mb-8 font-light">
                  Each moment captures the essence of who you are—radiant, authentic, and truly special.
                </p>
                <motion.div
                  className="h-1 w-16 bg-gradient-to-r from-accent to-accent/50 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true, amount: 0.5 }}
                />
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="max-w-7xl mx-auto px-safe h-px bg-gradient-to-r from-accent/30 via-accent/60 to-accent/30 rounded-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.8 }}
      />
    </section>
  )
}
