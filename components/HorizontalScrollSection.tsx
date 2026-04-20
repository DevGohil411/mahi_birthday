'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface HorizontalItem {
  id: string
  src: string
  alt: string
  index: number
}

export default function HorizontalScrollSection({
  items,
  title = 'Experience',
}: {
  items: HorizontalItem[]
  title?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Translate items horizontally based on scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, -2000])

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-dark-bg">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-safe mb-24">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-light-text mb-8 tracking-tight">
            {title}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full"
          />
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 px-safe"
          style={{ x }}
        >
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 w-96 h-96 relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Glassmorphic card */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-surface/40 to-dark-surface/20 backdrop-blur-xl border border-accent/10 rounded-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image with subtle rotation */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  rotate: `${(idx % 2 === 0 ? 1 : -1) * 1}deg`,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%231A1A1D" width="400" height="400"/%3E%3C/svg%3E'
                  }}
                />
              </motion.div>

              {/* Layered shadow effect */}
              <motion.div
                className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="flex justify-center mt-20"
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-secondary-text text-sm tracking-widest uppercase">Scroll for more</p>
      </motion.div>
    </section>
  )
}
