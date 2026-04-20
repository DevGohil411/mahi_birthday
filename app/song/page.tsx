import SongLyrics from '@/components/SongLyrics'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Song - Birthday Celebration',
  description: 'The Cyberpunk Edgerunners song that inspired this celebration',
}

export default function SongPage() {
  return (
    <main className="w-full bg-dark-bg">
      <Navigation />
      <SongLyrics />
    </main>
  )
}
