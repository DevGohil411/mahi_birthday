'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent z-50 origin-left"
      style={{ scaleX }}
    />
  )
}
