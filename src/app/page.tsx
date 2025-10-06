import Hero from '@/components/sections/hero'
import HomeSectionResources from '@/components/sections/home-section-resources'
import HomeSectionAbout from '@/components/sections/home-section-about'
import HomeSectionCommunities from '@/components/sections/home-section-communities'
import SupportingOrganizations from '@/components/sections/supporting-organizations'
import NewsletterSignup from '@/components/sections/newsletter-signup'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HomeSectionResources />
      <HomeSectionAbout />
      <HomeSectionCommunities />
      <SupportingOrganizations />
      <NewsletterSignup />
    </div>
  )
}
