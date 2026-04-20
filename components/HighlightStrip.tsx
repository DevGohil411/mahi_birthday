'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HIGHLIGHT_PHOTOS } from '@/lib/data'

export default function HighlightStrip() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({})
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const generatePlaceholder = (id: string) => {
    const colors = [
      'from-emerald-900 to-emerald-700',
      'from-cyan-900 to-cyan-700',
      'from-indigo-900 to-indigo-700',
    ]
    return colors[Number(id) % colors.length]
  }

  const item = {
    hidden: { opacity: 0, x: 60 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full py-32 bg-dark-bg overflow-hidden"
      style={{ opacity, scale }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-16">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-light-text mb-6 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Moments
        </motion.h2>
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-accent to-accent/30 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <motion.div
          ref={scrollRef}
          className="flex gap-8 px-4 md:px-8 lg:px-16 pb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {HIGHLIGHT_PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.id}
              custom={idx}
              variants={item}
              className="group flex-shrink-0 relative h-96 w-full md:w-96 rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ y: -8 }}
            >
              {/* Glassmorphism card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-surface/40 to-dark-surface/20 backdrop-blur-xl border border-accent/10 z-5" />

              {/* Media Content */}
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                {imageError[photo.id] ? (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${generatePlaceholder(photo.id)} flex items-center justify-center`}
                  >
                    <p className="text-light-text/50 text-sm">Photo</p>
                  </div>
                ) : (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="w-full h-full object-cover"
                    onError={() => setImageError(prev => ({ ...prev, [photo.id]: true }))}
                  />
                )}
              </motion.div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Caption */}
              <motion.div
                className="absolute inset-0 flex items-end justify-start p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <div>
                  <p className="text-light-text text-2xl font-medium leading-tight">{photo.caption}</p>
                </div>
              </motion.div>

              {/* Soft shadow on hover */}
              <motion.div
                className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="flex justify-center mt-12"
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-secondary-text text-sm tracking-widest uppercase">Scroll →</p>
      </motion.div>
    </motion.section>
  )
}
