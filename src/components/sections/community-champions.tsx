'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Linkedin, Twitter, ExternalLink } from 'lucide-react'

const champions = [
  {
    id: 1,
    name: 'Kyle McLeod',
    title: 'Founder & Community Organizer',
    company: 'Cloud99 & BusyB AI',
    bio: 'Kyle has been at the forefront of building the tech community in Central Oregon since 2018. He grew BendJS from a small group to over 600 members at its peak, and started COIN with Claude Ciocan in 2022 to bring the entrepreneurial community together.',
    image: '/images/kyle.jpg',
    linkedin: 'https://linkedin.com/in/kmcleod1',
  },
  {
    id: 2,
    name: 'Claude Ciocan',
    title: 'Founder & Community Organizer',
    company: 'Uptech Studio',
    bio: 'Claude has been a backbone in the startup and tech communities in Central Oregon, working with Kyle to build COIN, setup events, and support the growth of the community, all while running one of the countrys best tech and product studios.',
    image: '/images/claude.jpeg',
    linkedin: 'https://www.linkedin.com/in/cciocan/',
  },
  {
    id: 3,
    name: 'Kyle Rose',
    title: 'Co-Founder',
    company: 'Niche AI',
    bio: 'Kyle Rose has been an invaluable part of the tech and startup community here since he first graduated college. From the beginning, he has embodied the spirit of innovation and continuously supported the community while building multiple amazing companies.',
    image: '/images/krose.png',
    linkedin: 'https://www.linkedin.com/in/anonrose/',
  },
  {
    id: 4,
    name: 'Chris Vlessis',
    title: 'CTO & Former Founder',
    company: 'Repli',
    bio: 'Since exiting with his previous successful startup, Chris has returned to Central Oregon and jumped right back into the community. In the last year, Chris has proven himself to be a true innovator, builder, and invaluable resource to this community, hosting events and supporting community growth in all aspects.',
    image: '/images/cVlessis.jpeg',
    linkedin: 'https://www.linkedin.com/in/chris-vlessis/',
  },
  {
    id: 5,
    name: 'Ryan Comingdeer',
    title: 'Founder',
    company: 'Platformr',
    bio: 'Between his time building and selling Five Talent, becoming one of the worlds foremost experts on AWS, and now building Platformr, Ryan has somehow managed to find time to be an incredible advocate, support system, and true champion to the tech and entrepreneurial community here and across our region. Not only does he support the Central Oregon Community, but he sits on the board of OEN, is an active investor, and unrivaled resource for young entrepreneurs everywhere.',
    image: '/images/rComingdeer.jpeg',
    linkedin: 'https://www.linkedin.com/in/comingdeer/',
  },
]

export default function CommunityChampions() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Community Champions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Meet the incredible people who have truly helped and supported pushing this community forward. Their dedication and passion have made Central Oregon a thriving hub for innovation.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {champions.map((champion, index) => (
            <motion.div
              key={champion.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center">
                    <img
                      className="mx-auto h-32 w-32 rounded-full object-cover"
                      src={champion.image}
                      alt={champion.name}
                    />
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">{champion.name}</h3>
                    <p className="text-sm text-oregon-blue-600 font-medium">{champion.title}</p>
                    {champion.company && (
                      <p className="text-sm text-gray-500">{champion.company}</p>
                    )}
                    <p className="mt-4 text-sm text-gray-600">{champion.bio}</p>
                    
                    <div className="mt-6 flex justify-center space-x-4">
                      {champion.linkedin && (
                        <a
                          href={champion.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-oregon-blue-600 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {champion.twitter && (
                        <a
                          href={champion.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-oregon-blue-600 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              Want to join our community of champions?
            </p>
            <Button 
              variant="oregon" 
              size="lg"
              onClick={() => window.open('mailto:kyle@centraloregoninnovation.com?subject=Getting Involved with COIN', '_blank')}
            >
              Get Involved
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
