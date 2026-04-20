'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MediaCard from '@/components/MediaCard'
import { GALLERY_ITEMS } from '@/lib/data'

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  // Mixed layout pattern - extended for 33+ items
  const layoutPattern = [
    { col: 2, row: 2 }, // Large
    { col: 1, row: 1 }, // Small
    { col: 1, row: 1 }, // Small
    { col: 2, row: 1 }, // Medium
    { col: 2, row: 2 }, // Large
    { col: 1, row: 1 }, // Small
    { col: 2, row: 1 }, // Medium
    { col: 1, row: 1 }, // Small
    { col: 2, row: 2 }, // Large
    { col: 2, row: 1 }, // Medium
    { col: 1, row: 1 }, // Small
    { col: 1, row: 1 }, // Small
    { col: 2, row: 1 }, // Medium
    { col: 2, row: 2 }, // Large
    { col: 1, row: 1 }, // Small
    { col: 2, row: 1 }, // Medium
    { col: 1, row: 1 }, // Small
    { col: 1, row: 1 }, // Small
    { col: 2, row: 1 }, // Medium
    { col: 2, row: 2 }, // Large
    { col: 1, row: 1 }, // Small
    { col: 2, row: 1 }, // Medium
    { col: 1, row: 1 }, // Small
    { col: 2, row: 2 }, // Large
    { col: 2, row: 1 }, // Medium
    { col: 1, row: 1 }, // Small
    { col: 1, row: 1 }, // Small
    { col: 2, row: 1 }, // Medium
    { col: 2, row: 2 }, // Large
    { col: 1, row: 1 }, // Small
    { col: 2, row: 1 }, // Medium
    { col: 1, row: 1 }, // Small
    { col: 2, row: 1 }, // Medium
  ]

  return (
    <motion.main
      ref={containerRef}
      className="relative w-full bg-dark-bg min-h-screen py-32 pb-64"
      style={{ opacity }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-safe mb-32">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-light-text mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h1>
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-accent to-accent/30 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-safe">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[20rem]">
          {GALLERY_ITEMS.map((item, idx) => {
            const layout = layoutPattern[idx % layoutPattern.length]
            const colSpan = layout.col === 2 ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-1'
            const rowSpan = layout.row === 2 ? 'md:row-span-2 lg:row-span-2' : 'md:row-span-1 lg:row-span-1'
            const heightClass = layout.row === 2 ? 'h-full' : 'auto-rows-[20rem]'

            return (
              <div key={item.id} className={`${colSpan} ${rowSpan}`}>
                <MediaCard item={item} index={idx} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-safe mt-32">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary-text text-lg font-light mb-8">
            Every photo captures a moment, every video tells a story
          </p>
          <motion.a
            href="/moments"
            className="inline-block px-8 py-4 bg-accent text-dark-bg font-semibold rounded-full hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience Moments →
          </motion.a>
        </motion.div>
      </div>
    </motion.main>
  )
}
