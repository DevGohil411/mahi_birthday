'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Photo } from '@/lib/data'

interface MediaCardProps {
  item: Photo
  index?: number
  className?: string
}

export default function MediaCard({ item, index = 0, className = '' }: MediaCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  const isVideo = item.type === 'video'

  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.05,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const hoverEffect = {
    scale: 1.08,
    transition: { duration: 0.4 },
  }

  return (
    <motion.div
      className={`relative w-full h-full rounded-2xl overflow-hidden group ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={hoverEffect}
    >
      {/* Media Container */}
      <div className="relative w-full h-full bg-dark-surface">
        {error ? (
          // Fallback for failed media
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <p className="text-gray-500 text-sm">Media unavailable</p>
          </div>
        ) : isVideo ? (
          // Video
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={() => setError(true)}
          />
        ) : (
          // Image
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setError(true)}
          />
        )}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Caption Overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6 z-20"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-white text-lg font-medium">{item.caption}</p>
        {item.description && (
          <p className="text-gray-300 text-sm mt-2 font-light">{item.description}</p>
        )}
      </motion.div>

      {/* Video Badge */}
      {isVideo && (
        <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
          <p className="text-white text-xs font-semibold uppercase tracking-wider">Video</p>
        </div>
      )}

      {/* Glassmorphism Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10" />

      {/* Depth Shadow */}
      <motion.div
        className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  )
}