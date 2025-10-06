export interface Event {
  id: string
  title: string
  description: string
  date: Date
  time: string
  location: string
  type: 'tech-talk' | 'networking' | 'pitch-competition' | 'workshop'
  image?: string
}

export interface CommunityChampion {
  id: string
  name: string
  title: string
  bio: string
  image: string
  company?: string
  linkedin?: string
  twitter?: string
}

export interface SupportingOrganization {
  id: string
  name: string
  description: string
  logo: string
  website?: string
  category: 'sponsor' | 'partner' | 'supporter'
}

export interface NewsletterSignup {
  email: string
  firstName?: string
  lastName?: string
}

export interface NavItem {
  title: string
  href: string
  description?: string
}

export interface HeroSection {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaHref: string
  backgroundImage: string
}
