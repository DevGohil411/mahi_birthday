'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'story', label: 'Story', href: '/story' },
  { id: 'gallery', label: 'Gallery', href: '/gallery' },
  { id: 'moments', label: 'Moments', href: '/moments' },
  { id: 'final', label: 'Message', href: '/final' },
]

export function SectionDots() {
  const [activeSection, setActiveSection] = useState(0)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      // Estimate which section based on scroll
      const section = Math.floor(v * sections.length)
      setActiveSection(Math.min(section, sections.length - 1))
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <motion.div
      className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-40"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      {sections.map((section, idx) => (
        <motion.a
          key={section.id}
          href={section.href}
          className="relative group"
          whileHover={{ scale: 1.2 }}
        >
          {/* Main dot */}
          <motion.div
            className={`w-3 h-3 rounded-full transition-all ${
              idx === activeSection ? 'bg-accent scale-125' : 'bg-accent/30 group-hover:bg-accent/60'
            }`}
            animate={{
              scale: idx === activeSection ? 1.5 : 1,
              backgroundColor: idx === activeSection ? 'rgb(244, 63, 94)' : 'rgb(212, 212, 216, 0.3)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          />

          {/* Label on hover */}
          <motion.div
            className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm text-light-text/70 pointer-events-none"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {section.label}
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  )
}
