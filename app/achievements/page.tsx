import AchievementBadges from '@/components/AchievementBadges'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Achievements - Birthday Celebration',
  description: 'Your special achievements and personality traits',
}

export default function AchievementsPage() {
  return (
    <main className="w-full bg-dark-bg">
      <Navigation />
      <AchievementBadges />
    </main>
  )
}
