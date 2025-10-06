'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

const organizations = [
  {
    id: 1,
    name: 'Cloud99',
    description: '0 to 1 product creation consulting',
    logo: '/images/cloud99_logo1.png',
    website: 'https://cloud99.one',
    category: 'sponsor' as const,
  },
  {
    id: 2,
    name: 'Uptech Studio',
    description: 'Strategic technology partner for digital product design and development',
    logo: '/images/uptechlogo.png',
    website: 'https://uptechstudio.com',
    category: 'sponsor' as const,
  },
  {
    id: 3,
    name: 'What the Tech?',
    description: 'Bend Community Organization supporting those in the tech community',
    logo: '/images/wtt_logo.png',
    website: 'https://www.meetup.com/what-the-tech-bend/',
    category: 'partner' as const,
  },
  {
    id: 4,
    name: 'Oregon Entrepreneurs Network',
    description: 'Developing your ideas into reality',
    logo: '/images/OEN_Logo_RGB.png',
    website: 'https://oen.org',
    category: 'partner' as const,
  },
]

const categoryColors = {
  sponsor: 'bg-oregon-blue-100 text-oregon-blue-800',
  partner: 'bg-oregon-green-100 text-oregon-green-800',
  supporter: 'bg-gray-100 text-gray-800',
}

export default function SupportingOrganizations() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Supported by amazing organizations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We're grateful for the organizations that support our mission of fostering innovation in Central Oregon.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={org.logo}
                          alt={`${org.name} logo`}
                          className="h-12 w-auto object-contain"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{org.name}</h3>
                          <Badge className={categoryColors[org.category]}>
                            {org.category}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{org.description}</p>
                      <a
                        href={org.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-oregon-blue-600 hover:text-oregon-blue-700 font-medium transition-colors"
                      >
                        Visit website
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
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
            <a
              href="/sponsors"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-oregon-blue-600 hover:bg-oregon-blue-700 transition-colors"
            >
              View all sponsors
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
