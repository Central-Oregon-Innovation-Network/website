'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, MapPin } from 'lucide-react'

export default function EventsHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Tech conference presentation"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Upcoming events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-200"
          >
            Looking to get out and meet some likeminded innovators? Check out all the events coming up and get out and have some fun.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">Tech Talks</h3>
            <p className="mt-2 text-sm text-gray-200">
              Learn from industry experts and stay up-to-date with the latest in technology and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">Networking Events</h3>
            <p className="mt-2 text-sm text-gray-200">
              Connect with fellow entrepreneurs, investors, and innovators in Central Oregon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">Pitch Competitions</h3>
            <p className="mt-2 text-sm text-gray-200">
              Showcase your startup and compete for funding opportunities in our pitch events.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
