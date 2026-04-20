'use client'

import { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react'

interface Lyric {
  time: number
  text: string
}

interface AudioContextType {
  isPlaying: boolean
  currentTime: number
  duration: number
  lyrics: Lyric[]
  audioRef: React.RefObject<HTMLAudioElement> | null
  togglePlay: () => void
  setLyrics: (lyrics: Lyric[]) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [lyrics, setLyrics] = useState<Lyric[]>([])
  const autoplayTriggeredRef = useRef(false)

  const lyrics_data: Lyric[] = [
    // Verse 1 (0:00 - 0:48)
    { time: 0, text: 'I couldn\'t wait for you to come clear the cupboards' },
    { time: 6, text: 'But now you\'re going to leave with nothing but a sign' },
    { time: 12, text: 'Another evening I\'ll be sitting reading in between your lines' },
    { time: 20, text: 'Because I miss you all the time' },
    { time: 28, text: 'I couldn\'t wait for you to come clear the cupboards' },
    { time: 34, text: 'But now you\'re going to leave with nothing but a sign' },
    { time: 40, text: 'Another evening I\'ll be sitting reading in between your lines' },
    // Pre-Chorus (0:48 - 1:14)
    { time: 48, text: 'So, get away' },
    { time: 55, text: 'Another way to feel what you didn\'t want yourself to know' },
    { time: 61, text: 'And let yourself go' },
    { time: 67, text: 'You know you didn\'t lose your self-control' },
    // Chorus 1 (1:14 - 1:46)
    { time: 74, text: 'So what do you wanna do, what\'s your point-of-view?' },
    { time: 80, text: 'There\'s a party soon, do you wanna go?' },
    { time: 84, text: 'A handshake with you, what\'s your point-of-view?' },
    { time: 88, text: 'I\'m on top of you, I don\'t wanna go' },
    { time: 90, text: '\'Cause I really wanna stay at your house' },
    { time: 94, text: 'And I hope this works out' },
    { time: 98, text: 'But you know how much you broke me apart' },
    { time: 102, text: 'I\'m done with you, I\'m ignoring you' },
    { time: 104, text: 'I don\'t wanna know' },
    // Verse 2 (1:46 - 2:10)
    { time: 106, text: 'And I\'m aware that you were lying in the gutter' },
    { time: 113, text: '\'Cause I did everything to be there by your side' },
    { time: 119, text: 'So when you tell me I\'m the reason I just can\'t believe the lies' },
    { time: 125, text: 'And why do I so want to call you' },
    // Chorus 2 (2:10 - 2:34)
    { time: 130, text: 'So what do you wanna do, what\'s your point-of-view?' },
    { time: 136, text: 'There\'s a party soon, do you wanna go?' },
    { time: 140, text: 'A handshake with you, what\'s your point-of-view?' },
    { time: 144, text: 'I\'m on top of you, I don\'t wanna go' },
    { time: 146, text: '\'Cause I really wanna stay at your house' },
    { time: 150, text: 'And I hope this works out' },
    // Bridge (2:34 - 2:55)
    { time: 154, text: 'You' },
    { time: 160, text: 'I don\'t know why I\'m no-one' },
    // Pre-Chorus Repeat (2:55 - 3:20)
    { time: 175, text: 'So, get away' },
    { time: 182, text: 'Another way to feel what you didn\'t want yourself to know' },
    { time: 188, text: 'And let yourself go' },
    { time: 194, text: 'You know you didn\'t lose your self-control' },
    // Final Chorus (3:20 - 3:55)
    { time: 200, text: 'So what do you wanna do, what\'s your point-of-view?' },
    { time: 206, text: 'There\'s a party soon, do you wanna go?' },
    { time: 210, text: 'A handshake with you, what\'s your point-of-view?' },
    { time: 214, text: 'I\'m on top of you, I don\'t wanna go' },
    { time: 216, text: '\'Cause I really wanna stay at your house' },
    { time: 220, text: 'And I hope this works out' },
    { time: 224, text: 'But you know how much you broke me apart' },
    { time: 228, text: 'I\'m done with you, I\'m ignoring you' },
    { time: 230, text: 'I don\'t wanna know' },
  ]

  useEffect(() => {
    setLyrics(lyrics_data)
  }, [])

  // Auto-play on first load ONLY (never resets on navigation)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || autoplayTriggeredRef.current) return

    const handleCanPlay = () => {
      autoplayTriggeredRef.current = true
      audio.play().catch(() => {
        console.log('Autoplay not allowed by browser')
      })
    }

    audio.addEventListener('canplay', handleCanPlay, { once: true })
    return () => audio.removeEventListener('canplay', handleCanPlay)
  }, [])

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  const handleCanPlay = () => {
    // No-op: audio is ready
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play().catch((err) => {
          console.log('Audio play failed:', err)
        })
        setIsPlaying(true)
      }
    }
  }

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        lyrics,
        audioRef,
        togglePlay,
        setLyrics,
      }}
    >
      {children}
      <audio
        ref={audioRef}
        src="/music/Love Me Not.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onCanPlay={handleCanPlay}
        crossOrigin="anonymous"
      />
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider')
  }
  return context
}
