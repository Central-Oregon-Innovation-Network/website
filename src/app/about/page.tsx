import { Metadata } from 'next'
import AboutHero from '@/components/sections/about-hero'
import CommunityChampions from '@/components/sections/community-champions'
import MissionValues from '@/components/sections/mission-values'

export const metadata: Metadata = {
  title: 'About Us - Central Oregon Innovation Network',
  description: 'Learn about our mission to empower the innovation community in Central Oregon and meet the people who have helped push this community forward.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MissionValues />
      <CommunityChampions />
    </div>
  )
}
