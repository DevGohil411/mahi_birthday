'use client'

import { useState } from 'react'
import IntroVideo from '@/components/IntroVideo'
import Hero from '@/components/Hero'
import StorySection from '@/components/StorySection'
import HorizontalScrollSection from '@/components/HorizontalScrollSection'
import VideoGrid from '@/components/VideoGrid'
import HighlightStrip from '@/components/HighlightStrip'
import Message from '@/components/Message'
import Finale from '@/components/Finale'
import { HIGHLIGHT_PHOTOS } from '@/lib/data'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  const horizontalItems = HIGHLIGHT_PHOTOS.map((photo) => ({
    id: photo.id,
    src: photo.src,
    alt: photo.alt,
    index: parseInt(photo.id.replace('h', '')),
  }))

  return (
    <main className="w-full bg-dark-bg">
      {showIntro && <IntroVideo onComplete={() => setShowIntro(false)} />}
      <Hero />
      <StorySection />
      <HorizontalScrollSection items={horizontalItems} title="Discover" />
      <VideoGrid />
      <HighlightStrip />
      <Message />
      <Finale />
    </main>
  )
}
