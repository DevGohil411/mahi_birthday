'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Achievement {
  id: string
  icon: string
  title: string
  description: string
  detail: string
  gradient: string
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'integrity',
    icon: '◆',
    title: 'Integrity',
    description: 'A rare authenticity',
    detail: 'In a world of filters and facades, you remain genuinely yourself. Your authenticity is magnetic and deeply respected.',
    gradient: 'from-slate-600/20 to-slate-700/20',
  },
  {
    id: 'wisdom',
    icon: '◇',
    title: 'Wisdom',
    description: 'Thoughtful presence',
    detail: 'You listen more than you speak. Your insights come from genuine understanding, not just observation.',
    gradient: 'from-emerald-600/20 to-teal-700/20',
  },
  {
    id: 'grace',
    icon: '▬',
    title: 'Grace',
    description: 'Elegant composure',
    detail: 'The way you carry yourself speaks volumes. Calm, composed, and effortlessly poised in any situation.',
    gradient: 'from-indigo-600/20 to-purple-700/20',
  },
  {
    id: 'resilience',
    icon: '▲',
    title: 'Resilience',
    description: 'Inner strength',
    detail: 'You face challenges without losing sight of what matters. Your strength is quiet but unmistakable.',
    gradient: 'from-orange-600/20 to-amber-700/20',
  },
  {
    id: 'compassion',
    icon: '●',
    title: 'Compassion',
    description: 'Genuine kindness',
    detail: 'You see people for who they truly are. Your empathy doesn\'t demand recognition—it simply exists.',
    gradient: 'from-rose-600/20 to-pink-700/20',
  },
  {
    id: 'elegance',
    icon: '◎',
    title: 'Elegance',
    description: 'Refined presence',
    detail: 'There\'s a timeless quality to how you move through the world. Sophisticated without being pretentious.',
    gradient: 'from-cyan-600/20 to-blue-700/20',
  },
]

export default function AchievementBadges() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  }

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg flex items-center justify-center py-32 px-safe overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-light text-light-text mb-6 tracking-tight">
            Your Essence
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
          <p className="text-lg text-secondary-text font-light">
            Six qualities that define who you are
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ACHIEVEMENTS.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              onClick={() => setSelectedId(selectedId === achievement.id ? null : achievement.id)}
              className="cursor-pointer group"
            >
              <motion.div
                className={`relative h-72 rounded-xl border border-accent/20 backdrop-blur-sm
                  bg-gradient-to-br ${achievement.gradient} 
                  hover:border-accent/50 transition-all duration-300
                  p-8 flex flex-col items-center justify-center overflow-hidden`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Subtle animated background line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: 'loop' }}
                  style={{ pointerEvents: 'none' }}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-6 text-accent/80"
                    animate={selectedId === achievement.id ? { scale: [1, 1.15, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {achievement.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-light text-light-text mb-2 tracking-wide">
                    {achievement.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-secondary-text font-light mb-4 italic">
                    {achievement.description}
                  </p>

                  {/* Expandable detail */}
                  <AnimatePresence>
                    {selectedId === achievement.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-secondary-text leading-relaxed pt-4 border-t border-accent/20 mt-4"
                      >
                        {achievement.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hover border effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-accent opacity-0 group-hover:opacity-100"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ pointerEvents: 'none' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-secondary-text font-light tracking-wide">
            Click to discover each quality • Each one is uniquely you
          </p>
        </motion.div>
      </div>
    </section>
  )
}
