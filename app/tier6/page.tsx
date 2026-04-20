'use client'

import { motion } from 'framer-motion'
import { HandwrittenText } from '@/components/HandwrittenText'

export default function Tier6Features() {
  return (
    <main className="w-full bg-dark-bg min-h-screen py-32 px-safe">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-light-text mb-6">
            Premium Features
          </h1>
          <p className="text-xl text-light-text/70">Everything you need for an unforgettable experience</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Feature 1: Easter Eggs */}
          <motion.div
            className="bg-dark-surface/50 backdrop-blur border border-accent/20 rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-light-text mb-4">Hidden Easter Eggs</h3>
            <p className="text-light-text/70 mb-4">
              Try the Konami code: <span className="text-accent font-mono">↑↑↓↓←→←→BA</span>
            </p>
            <p className="text-light-text/70">
              Or double-click the logo for a surprise! 🎊
            </p>
          </motion.div>

          {/* Feature 2: Analytics */}
          <motion.div
            className="bg-dark-surface/50 backdrop-blur border border-accent/20 rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-light-text mb-4">Smart Analytics</h3>
            <p className="text-light-text/70 mb-4">
              We track your journey silently:
            </p>
            <ul className="text-light-text/70 space-y-2">
              <li>✓ Visit counts</li>
              <li>✓ Time spent on site</li>
              <li>✓ Scroll depth tracking</li>
            </ul>
          </motion.div>

          {/* Feature 3: Music */}
          <motion.div
            className="bg-dark-surface/50 backdrop-blur border border-accent/20 rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-2xl font-bold text-light-text mb-4">Background Music</h3>
            <p className="text-light-text/70 mb-4">
              Music player on all pages with:
            </p>
            <ul className="text-light-text/70 space-y-2">
              <li>✓ Desktop & Mobile support</li>
              <li>✓ Progress tracking</li>
              <li>✓ Live lyrics display</li>
            </ul>
          </motion.div>

          {/* Feature 4: Handwritten Text */}
          <motion.div
            className="bg-dark-surface/50 backdrop-blur border border-accent/20 rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="text-2xl font-bold text-light-text mb-4">Handwritten Text</h3>
            <p className="text-light-text/70 mb-4">
              Personal touch with elegant typography:
            </p>
            <HandwrittenText text="Like this!" delay={0} />
          </motion.div>

          {/* Feature 5: Custom Cursor */}
          <motion.div
            className="bg-dark-surface/50 backdrop-blur border border-accent/20 rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🖱️</div>
            <h3 className="text-2xl font-bold text-light-text mb-4">Animated Cursor</h3>
            <p className="text-light-text/70 mb-4">
              A custom cursor with trail effects that:
            </p>
            <ul className="text-light-text/70 space-y-2">
              <li>✓ Glows on clickable elements</li>
              <li>✓ Leaves a trail effect</li>
              <li>✓ Smooth spring animation</li>
            </ul>
          </motion.div>

          {/* Feature 6: Page Navigation */}
          <motion.div
            className="bg-dark-surface/50 backdrop-blur border border-accent/20 rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🔘</div>
            <h3 className="text-2xl font-bold text-light-text mb-4">Section Dots</h3>
            <p className="text-light-text/70 mb-4">
              Beautiful navigation indicator:
            </p>
            <ul className="text-light-text/70 space-y-2">
              <li>✓ Fixed left sidebar (desktop)</li>
              <li>✓ Auto-sync with scroll</li>
              <li>✓ Hover labels for each section</li>
            </ul>
          </motion.div>
        </div>

        {/* Getting Started */}
        <motion.div
          className="bg-accent/10 border border-accent/30 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-light-text mb-6">Ready to Explore?</h2>
          <p className="text-xl text-light-text/70 mb-8 max-w-2xl mx-auto">
            All these features are active across the entire website. Start with the home page and enjoy the full experience!
          </p>
          <motion.a
            href="/"
            className="inline-block px-8 py-4 bg-accent text-dark-bg font-semibold rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home →
          </motion.a>
        </motion.div>
      </div>
    </main>
  )
}
