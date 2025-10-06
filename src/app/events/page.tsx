import { Metadata } from 'next'
import EventsHero from '@/components/sections/events-hero'
import EventsCalendar from '@/components/sections/events-calendar'
import UpcomingEvents from '@/components/sections/upcoming-events'
import NewsletterSignup from '@/components/sections/newsletter-signup'

export const metadata: Metadata = {
  title: 'Events - Central Oregon Innovation Network',
  description: 'Join us for tech talks, networking events, pitch competitions, and workshops. Stay connected with the Central Oregon innovation community.',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <EventsHero />
      <EventsCalendar />
      {/* <UpcomingEvents /> */}
      <NewsletterSignup />
    </div>
  )
}
