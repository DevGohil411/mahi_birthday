import type { Metadata, Viewport } from 'next'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import Navigation from '@/components/Navigation'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
import { SectionDots } from '@/components/SectionDots'
import { Confetti } from '@/components/Confetti'
import { MusicPlayer } from '@/components/MusicPlayer'
import { LyricsDisplay } from '@/components/LyricsDisplay'
import { EasterEggs } from '@/components/EasterEggs'
import { Analytics } from '@/components/Analytics'
import { AudioProvider } from '@/context/AudioContext'

export const metadata: Metadata = {
  title: "Happy Birthday, Mahi 🎉",
  description: "A premium, cinematic birthday tribute made just for you",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-screen">
      <head>
        <meta name="theme-color" content="#0E0E10" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-dark-bg text-light-text h-screen m-0 p-0 overflow-x-hidden">
        <AudioProvider>
          <Analytics />
          <CustomCursor />
          <ScrollProgress />
          <SectionDots />
          <Confetti />
          <MusicPlayer />
          <LyricsDisplay />
          <EasterEggs />
          <Navigation />
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </AudioProvider>
      </body>
    </html>
  )
}
