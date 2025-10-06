'use client'

import { motion } from 'framer-motion'
import { Target, Users, Lightbulb, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We are committed to fostering growth in the entrepreneurial spirit of Central Oregon by empowering entrepreneurs from all walks of life to build their dreams into reality.',
  },
  {
    icon: Users,
    title: 'Community-First',
    description: 'Building startups, the Central Oregon way - through collaboration, mentorship, and a culture of growth and innovation that brings people together.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Focused',
    description: 'Whatever industry you\'re in or product you\'re building, we\'ve got your back with the resources and connections you need to succeed.',
  },
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'We\'re a community of doers, driven by passion and years of experience in entrepreneurship, tackling unique and important challenges for our region.',
  },
]

export default function MissionValues() {
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
            Our mission is to foster growth in the entrepreneurial spirit of Central Oregon
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Central Oregon is a unique community built on a culture of growth and innovation. Whatever industry you're in or product you're building, we've got your back!
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <value.icon className="h-5 w-5 flex-none text-oregon-blue-600" aria-hidden="true" />
                  {value.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
