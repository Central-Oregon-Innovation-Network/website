'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { formatDate } from '@/lib/utils'

// Mock upcoming events data
const upcomingEvents = [
  {
    id: '1',
    title: 'Tech Talk: AI in Startups',
    description: 'Learn how artificial intelligence is revolutionizing the startup landscape and discover practical applications for your business.',
    date: new Date('2024-12-15'),
    time: '6:00 PM - 8:00 PM',
    location: 'Bend Tech Hub',
    type: 'tech-talk' as const,
    attendees: 45,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Startup Networking Mixer',
    description: 'Connect with fellow entrepreneurs, investors, and innovators in Central Oregon. Food and drinks provided.',
    date: new Date('2024-12-18'),
    time: '5:30 PM - 7:30 PM',
    location: 'Deschutes Brewery',
    type: 'networking' as const,
    attendees: 80,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Pitch Competition Finals',
    description: 'Watch finalists present their innovative ideas to a panel of judges. Winner takes home $10,000 in funding.',
    date: new Date('2024-12-22'),
    time: '7:00 PM - 9:30 PM',
    location: 'Tower Theatre',
    type: 'pitch-competition' as const,
    attendees: 150,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Workshop: Building Your MVP',
    description: 'Hands-on workshop where you\'ll learn the fundamentals of building a Minimum Viable Product for your startup.',
    date: new Date('2024-12-28'),
    time: '9:00 AM - 4:00 PM',
    location: 'COCC Campus',
    type: 'workshop' as const,
    attendees: 25,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
]

const eventTypeColors = {
  'tech-talk': 'bg-blue-100 text-blue-800',
  'networking': 'bg-green-100 text-green-800',
  'pitch-competition': 'bg-purple-100 text-purple-800',
  'workshop': 'bg-orange-100 text-orange-800',
}

const eventTypeLabels = {
  'tech-talk': 'Tech Talk',
  'networking': 'Networking',
  'pitch-competition': 'Pitch Competition',
  'workshop': 'Workshop',
}

export default function UpcomingEvents() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Upcoming Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Don't miss out on these exciting upcoming events. Join us and be part of the Central Oregon innovation community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <Badge className={eventTypeColors[event.type]}>
                        {eventTypeLabels[event.type]}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3">{event.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} attendees expected
                    </div>
                  </div>
                  <Button variant="oregon" className="w-full mt-4">
                    Join Newsletter for Updates
                  </Button>
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
              Want to stay updated on all our events?
            </p>
            <Button variant="oregon" size="lg">
              Sign Up for Our Newsletter
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
