'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import MediaCard from './MediaCard'
import { GALLERY_ITEMS } from '@/lib/data'
import { useRef } from 'react'

export default function PhotoGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Create mixed layout pattern
  const layoutPattern = ['large', 'small', 'large', 'medium', 'medium', 'large']

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full py-32 bg-dark-bg"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto px-safe">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-light-text mb-6 tracking-tight">
            Gallery
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full"
          />
        </motion.div>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {GALLERY_ITEMS.map((photo, idx) => {
            const sizeIdx = idx % layoutPattern.length
            const size = layoutPattern[sizeIdx] as 'small' | 'medium' | 'large'

            let colSpan = 'lg:col-span-2'
            let rowSpan = 'lg:row-span-2'
            let rotation = (idx % 3 - 1) * 1.5 // -1.5, 0, 1.5 deg

            if (size === 'small') {
              colSpan = 'lg:col-span-1'
              rowSpan = 'lg:row-span-1'
            } else if (size === 'medium') {
              colSpan = 'lg:col-span-2'
              rowSpan = 'lg:row-span-1'
            }

            return (
              <motion.div
                key={photo.id}
                className={`${colSpan} ${rowSpan} group`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: (idx % 6) * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8, rotate: rotation * 0.5 }}
              >
                {/* Image wrapper with rotation */}
                <motion.div
                  className="relative w-full h-full rounded-2xl overflow-hidden"
                  style={{
                    rotate: rotation,
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: rotation * 1.2,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <MediaCard
                      item={photo}
                      index={idx}
                    />
                  </div>

                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent rounded-2xl pointer-events-none" />
                </motion.div>

                {/* Layered shadow - depth effect */}
                <motion.div
                  className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Caption overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent rounded-b-2xl"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <p className="text-light-text font-medium text-lg">{photo.caption}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
          className="mt-24 h-px bg-gradient-to-r from-accent/30 via-accent/60 to-accent/30 rounded-full"
        />
      </div>
    </motion.section>
  )
}
