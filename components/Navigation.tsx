'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/story', label: 'Your Story' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/moments', label: 'Moments' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/song', label: '♪ Song' },
    { href: '/final', label: 'Message' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="hidden md:fixed md:top-0 md:left-0 md:right-0 md:z-40 md:flex md:items-center md:justify-between md:px-8 md:py-6 md:bg-dark-bg/80 md:backdrop-blur-md md:border-b md:border-accent/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/" className="text-light-text font-bold text-xl">
          Mahi
        </Link>

        <div className="flex gap-8 items-center">
          {navLinks.slice(1).map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-accent'
                  : 'text-secondary-text hover:text-light-text'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 md:hidden w-14 h-14 bg-accent text-dark-bg rounded-full flex items-center justify-center font-bold text-xl shadow-lg hover:shadow-xl transition-shadow"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? '✕' : '☰'}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-md flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`text-2xl font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-accent'
                    : 'text-light-text hover:text-accent'
                }`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
