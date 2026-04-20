'use client'

import { motion } from 'framer-motion'

interface TextRevealProps {
  text: string
  type?: 'word' | 'line' | 'char'
  className?: string
  delay?: number
  staggerDelay?: number
}

export function TextReveal({
  text,
  type = 'word',
  className = '',
  delay = 0,
  staggerDelay = 0.05,
}: TextRevealProps) {
  const getFragments = () => {
    if (type === 'line') {
      // Handle both actual newlines and escaped newlines
      const processedText = text.replace(/\\n/g, '\n')
      return processedText.split('\n').map((line, idx) => ({
        id: idx,
        text: line || '',
        key: `line-${idx}`,
      }))
    } else if (type === 'word') {
      return text.split(' ').map((word, idx) => ({
        id: idx,
        text: word,
        key: `word-${idx}`,
      }))
    } else {
      return text.split('').map((char, idx) => ({
        id: idx,
        text: char,
        key: `char-${idx}`,
      }))
    }
  }

  const fragments = getFragments()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const fragmentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  if (type === 'line') {
    return (
      <motion.div
        className={`${className} space-y-4`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {fragments.map((fragment, idx) => (
          <motion.div key={fragment.key} variants={fragmentVariants} className="block leading-relaxed min-h-fit">
            {fragment.text === '' ? <div className="h-2" /> : fragment.text || '\u200B'}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {fragments.map((fragment) => (
        <motion.span key={fragment.key} variants={fragmentVariants}>
          {fragment.text}
          {type === 'word' && ' '}
        </motion.span>
      ))}
    </motion.div>
  )
}
