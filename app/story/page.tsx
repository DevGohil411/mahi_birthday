'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { STORY_PHOTOS } from '@/lib/data'

export default function StoryPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <motion.main
      ref={containerRef}
      className="relative w-full bg-dark-bg"
      style={{ opacity }}
    >
      {/* Header */}
      <div className="h-screen flex items-center justify-center px-safe">
        <div className="text-center max-w-3xl">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-light-text mb-6"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your Story
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-secondary-text font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every moment tells a beautiful tale
          </motion.p>
        </div>
      </div>

      {/* Story Grid - 2 Column Alternating */}
      <div className="max-w-7xl mx-auto px-safe py-32 space-y-32">
        {STORY_PHOTOS.map((photo, idx) => {
          const isLeft = idx % 2 === 0
          const yOffset = useTransform(
            scrollYProgress,
            [idx * 0.08, (idx + 1) * 0.08 + 0.1],
            [100, -100]
          )

          return (
            <motion.div
              key={photo.id}
              className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image Side */}
              <motion.div
                className={`relative h-96 md:h-[32rem] rounded-2xl overflow-hidden group ${!isLeft ? 'md:order-2' : ''}`}
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
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%231A1A1D" width="400" height="400"/%3E%3C/svg%3E'
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Layered shadow */}
                <motion.div className="absolute -inset-6 bg-accent/15 rounded-2xl blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Text Side */}
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
                <p className="text-lg text-secondary-text leading-relaxed font-light">
                  {photo.description}
                </p>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="h-screen flex items-center justify-center px-safe">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-light-text mb-8">
            More to come
          </h2>
          <motion.a
            href="/gallery"
            className="inline-block px-8 py-4 bg-accent text-dark-bg font-semibold rounded-full hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Gallery →
          </motion.a>
        </motion.div>
      </div>
    </motion.main>
  )
}
