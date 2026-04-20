'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MOMENT_SECTIONS, DISCOVER_PHOTOS } from '@/lib/data'
import { TextReveal } from '@/components/TextReveal'
import { CinematicText } from '@/components/CinematicText'
import { AnimatedVideo } from '@/components/AnimatedVideo'
import { EnhancedMedia } from '@/components/EnhancedMedia'
import { FloatingParticles } from '@/components/FloatingParticles'
import { AnimatedLeftSidebar } from '@/components/AnimatedLeftSidebar'
import { AnimatedRightSide } from '@/components/AnimatedRightSide'
import { FirstSectionIntro } from '@/components/FirstSectionIntro'
import { VideoTextOverlay } from '@/components/VideoTextOverlay'

const MOMENT_MESSAGES = [
  {
    title: 'Quiet Confidence',
    text: 'There\'s a calm strength in the way you carry yourself.\nNo need to prove anything.\nNo need to compete.\nYou just exist—and that\'s enough to be noticed.',
  },
  {
    title: 'Captured Magic',
    text: 'Every frame holds a story.\nYour story—beautiful, authentic, unforgettable.\nEach moment, a piece of who you really are.',
  },
  {
    title: 'Standing Out',
    text: 'You don\'t try to stand out.\nYou don\'t force anything.\nAnd still, people notice.\n\nBecause authenticity speaks louder than anything else.',
  },
  {
    title: 'Pure Moments',
    text: 'The way you move through moments feels effortless.\nThere\'s no pressure, no performance—just you.\n\nAnd that\'s what makes it different.',
  },
  {
    title: 'Grace',
    text: 'Grace isn\'t something you wear.\nIt\'s something you are.\n\nIt\'s in the way you exist.\nQuietly. Powerfully. Yourself.',
  },
  {
    title: 'Natural Energy',
    text: 'In a world where everyone is trying to be something,\nyou\'re just being yourself.\n\nAnd honestly, that\'s what makes you stand out\nmore than anything else ever could.',
  },
  {
    title: 'Unspoken Impact',
    text: 'Not everything needs to be loud to be meaningful.\nSome things are quiet, subtle, and still powerful.\n\nThe way you exist leaves an impact.\nNot always obvious.\nBut always there.',
  },
  {
    title: 'Individuality',
    text: 'There\'s something rare in being completely yourself\nwithout needing to change for anyone.\n\nNo filters. No masks. No adjustments.\nJust honesty in the way you exist.',
  },
  {
    title: 'Recognition',
    text: 'This is about recognizing something real when you see it.\nAnd acknowledging that some people\njust carry a presence that stays with you.\n\nQuietly. Genuinely. You.',
  },
]

const DISCOVER_MESSAGES = [
  {
    title: 'Dreams in Motion',
    text: 'Every dream you have is valid.\nEvery aspiration, every goal, every vision.\nThey matter because you matter.',
  },
  {
    title: 'In the Light',
    text: 'When you stop hiding and just exist,\nthat\'s when you truly shine.\n\nNo apologies. No masks.\nJust brilliance.',
  },
  {
    title: 'Freedom Defined',
    text: 'True freedom is being completely yourself\nwithout fear of judgment.\n\nThat\'s what you are.\nThat\'s what you inspire in others.',
  },
  {
    title: 'Soul Deep',
    text: 'There\'s a depth to you that can\'t be faked.\nA realness that draws people in.\n\nThat\'s your superpower.',
  },
  {
    title: 'Vision',
    text: 'You see things others miss.\nYou dream bigger than most.\nAnd you have the strength to make it real.',
  },
  {
    title: 'The Journey',
    text: 'It\'s not about the destination.\nIt\'s about how you walk the path.\n\nAnd you, my friend, walk with grace.',
  },
  {
    title: 'Legacy',
    text: 'The impact you have is deeper than you know.\nPeople remember how you made them feel.\n\nYou make them feel seen. Special. Valued.',
  },
  {
    title: 'Forever You',
    text: 'This year, next year, always—\nremember that your worth isn\'t determined by anyone else.\n\nYou are enough. You are everything.',
  },
]

export default function MomentsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Global fade effect
  const globalOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])

  // Hero parallax
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, 100])

  return (
    <motion.main ref={containerRef} className="relative w-full bg-dark-bg pb-32 overflow-y-auto" style={{ opacity: globalOpacity }}>
      {/* ===== HERO SECTION ===== */}
      <motion.section
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-safe"
        style={{ y: heroY }}
      >
        {/* Hero Background with Enhanced Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg" />
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
            animate={{ scale: [1, 0.9, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Floating Particles in Hero */}
        <FloatingParticles />

        {/* Hero Content */}
        <motion.div className="text-center max-w-3xl relative z-10">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-light-text mb-8 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            The Grace in Every Frame
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-light-text/70 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            A celebration of elegance and presence
          </motion.p>

          {/* Enhanced Divider with Animation */}
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-accent/0 via-accent to-accent/0 mx-auto mt-12"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          {/* Decorative Accent Dots Below Title */}
          <motion.div
            className="flex gap-2 justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-accent/40 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== CINEMATIC TRANSITION 1 ===== */}
      <CinematicText
        text="Some people don't need a loud presence to be noticed.\nThey don't need to try too hard.\nThere's just something about the way they exist.\n\nYou're one of those people."
        delay={0.1}
      />

      {/* ===== CINEMATIC TRANSITION 1 ===== */}
      <CinematicText
        text="Some people don't need a loud presence to be noticed.\nThey don't need to try too hard.\nThere's just something about the way they exist.\n\nYou're one of those people."
        delay={0.1}
      />

      {/* ===== MOMENTS SECTIONS - ALTERNATING LAYOUT ===== */}
      {MOMENT_SECTIONS.map((section, idx) => {
        const isLeft = idx % 2 === 0
        const message = MOMENT_MESSAGES[idx]
        const isVideo = section.type === 'video'

        return (
          <motion.section
            key={section.id}
            className="relative min-h-screen w-full flex items-center py-24 md:py-32 px-safe overflow-hidden"
          >
            {/* Add Top Badge Intro only for first section */}
            {idx === 0 && <FirstSectionIntro delay={0.4} />}

            {/* Add Left Sidebar Animation only for first section */}
            {idx === 0 && <AnimatedLeftSidebar delay={0.2} />}

            {/* Add Right Side Animation only for first section */}
            {idx === 0 && <AnimatedRightSide delay={0.3} />}

            {/* Floating Particles Background */}
            <FloatingParticles />

            <div className="max-w-7xl mx-auto w-full relative z-10">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center ${isLeft ? '' : 'md:grid-cols-2'}`}>
                {/* Enhanced Media with Parallax, Hover & Music Sync */}
                <div className="relative w-full h-96 md:h-[500px] md:order-1">
                  {/* Text Overlay - RENDERED FIRST BUT ON TOP */}
                  {idx === 0 && (
                    <VideoTextOverlay
                      title="Quiet Confidence"
                      subtitle="There's a calm strength in the way you carry yourself"
                      delay={0}
                    />
                  )}
                  
                  {/* Enhanced Media */}
                  <EnhancedMedia
                    src={section.src}
                    alt={section.alt}
                    type={section.type as 'image' | 'video'}
                    isLeft={isLeft}
                    idx={idx}
                    textOverlay={idx === 0 ? {
                      title: '✨ Captured Elegance',
                      subtitle: 'Every frame tells your unique story'
                    } : undefined}
                  />
                </div>

                {/* Text Side */}
                <motion.div
                  className={`flex flex-col justify-center ${isLeft ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Staggered Accent Line */}
                  <motion.div
                    className="h-1 w-12 bg-gradient-to-r from-accent via-accent to-transparent rounded-full mb-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  />

                  {/* Staggered Title Reveal */}
                  <TextReveal
                    text={message.title}
                    type="word"
                    className="text-4xl md:text-5xl font-bold text-light-text mb-6 leading-tight"
                    delay={0.4}
                    staggerDelay={0.05}
                  />

                  {/* Premium Message - Line by line with better spacing */}
                  <TextReveal
                    text={message.text}
                    type="line"
                    className="text-lg md:text-xl text-light-text/75 font-light"
                    delay={0.5}
                    staggerDelay={0.08}
                  />

                  {/* Enhanced Accent Dot with Music Sync */}
                  <motion.div
                    className="flex gap-2 mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="h-2 w-2 bg-accent rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Dynamic Decorative Background Elements */}
            <motion.div
              className={`absolute top-1/4 ${isLeft ? 'right-0' : 'left-0'} w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none`}
              animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, delay: idx * 0.5 }}
              style={{
                background: `radial-gradient(circle, rgba(251, 146, 60, ${0.15 + idx * 0.05}) 0%, transparent 70%)`
              }}
            />
            <motion.div
              className={`absolute bottom-1/3 ${isLeft ? 'left-0' : 'right-0'} w-64 h-64 rounded-full blur-3xl -z-10 pointer-events-none`}
              animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 10, repeat: Infinity, delay: idx * 0.3 }}
              style={{
                background: `radial-gradient(circle, rgba(168, 85, 247, ${0.1 + idx * 0.03}) 0%, transparent 70%)`
              }}
            />
          </motion.section>
        )
      })}

      {/* ===== CINEMATIC TRANSITION 2 (MID-POINT) ===== */}
      <CinematicText
        text="This isn't about moments or memories.\nIt's about recognizing something real when you see it.\n\nAnd acknowledging that some people\njust carry a presence that stays with you."
        delay={0.1}
      />

      {/* ===== DISCOVER SECTION - Unique Photos ===== */}
      <motion.section className="relative w-full py-32 px-safe overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Discover Header */}
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-bold text-light-text mb-6 tracking-tight">Discover</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-light-text/70 font-light">More moments, more magic</p>
          </motion.div>

          {/* Discover Grid */}
          {DISCOVER_PHOTOS.map((photo, idx) => {
            const isLeft = idx % 2 === 0
            const message = DISCOVER_MESSAGES[idx]
            const isVideo = photo.type === 'video'

            return (
              <motion.section
                key={photo.id}
                className="relative min-h-screen w-full flex items-center py-24 md:py-32 overflow-hidden"
              >
                {/* Floating Particles Background */}
                <FloatingParticles />

                <div className="max-w-7xl mx-auto w-full relative z-10">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center ${isLeft ? '' : 'md:grid-cols-2'}`}>
                    {/* Enhanced Media with Parallax */}
                    <div className="relative w-full h-96 md:h-[500px] md:order-1">
                      <EnhancedMedia
                        src={photo.src}
                        alt={photo.alt}
                        type={photo.type as 'image' | 'video'}
                        isLeft={isLeft}
                        idx={idx}
                      />
                    </div>

                    {/* Text Side */}
                    <motion.div
                      className={`flex flex-col justify-center ${isLeft ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'}`}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {/* Staggered Accent Line */}
                      <motion.div
                        className="h-1 w-12 bg-gradient-to-r from-accent via-accent to-transparent rounded-full mb-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      />

                      {/* Staggered Title Reveal */}
                      <TextReveal
                        text={message.title}
                        type="word"
                        className="text-4xl md:text-5xl font-bold text-light-text mb-6 leading-tight"
                        delay={0.4}
                        staggerDelay={0.05}
                      />

                      {/* Premium Message */}
                      <TextReveal
                        text={message.text}
                        type="line"
                        className="text-lg md:text-xl text-light-text/75 font-light"
                        delay={0.5}
                        staggerDelay={0.08}
                      />

                      {/* Enhanced Accent Dot */}
                      <motion.div
                        className="flex gap-2 mt-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                      >
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="h-2 w-2 bg-accent rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Dynamic Decorative Background Elements */}
                <motion.div
                  className={`absolute top-1/4 ${isLeft ? 'right-0' : 'left-0'} w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none`}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 8, repeat: Infinity, delay: idx * 0.5 }}
                  style={{
                    background: `radial-gradient(circle, rgba(168, 85, 247, ${0.15 + idx * 0.05}) 0%, transparent 70%)`
                  }}
                />
                <motion.div
                  className={`absolute bottom-1/3 ${isLeft ? 'left-0' : 'right-0'} w-64 h-64 rounded-full blur-3xl -z-10 pointer-events-none`}
                  animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.15, 0.35, 0.15] }}
                  transition={{ duration: 10, repeat: Infinity, delay: idx * 0.3 }}
                  style={{
                    background: `radial-gradient(circle, rgba(251, 146, 60, ${0.1 + idx * 0.03}) 0%, transparent 70%)`
                  }}
                />
              </motion.section>
            )
          })}
        </div>
      </motion.section>

      {/* ===== CINEMATIC TRANSITION 3 (BEFORE FINAL) ===== */}
      <CinematicText
        text="You've discovered something rare today.\nYourself. Your strength. Your worth.\n\nHold onto that."
        delay={0.1}
      />

      {/* ===== FINAL CINEMATIC SECTION ===== */}
      <motion.section className="relative min-h-screen w-full flex items-center justify-center py-24 md:py-32 px-safe overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-bg" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/8 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        {/* Final Message with TextReveal */}
        <motion.div className="text-center max-w-3xl relative z-10">
          <TextReveal
            text="You didn't need any of this to be special.\n\nYou didn't need a page,\nor words,\nor anything extra.\n\nBecause the truth is—\nyou already were.\n\nThis is just a small reminder of that."
            type="line"
            className="text-4xl md:text-6xl font-light text-light-text leading-relaxed space-y-6"
            delay={0.1}
            staggerDelay={0.12}
          />

          {/* CTA Button */}
          <motion.div
            className="mt-20 flex flex-col sm:flex-row gap-6 items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.a
              href="/final"
              className="px-8 py-4 bg-accent text-dark-bg font-semibold rounded-full cursor-pointer transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              A Personal Message →
            </motion.a>
            <motion.a
              href="/gallery"
              className="px-8 py-4 border border-accent/50 text-light-text font-semibold rounded-full cursor-pointer hover:border-accent transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Gallery
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.main>
  )
}

