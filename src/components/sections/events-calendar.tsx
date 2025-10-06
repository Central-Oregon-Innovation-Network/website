'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'

// Mock data for demonstration - in production, this would come from Google Calendar API
const mockEvents = [
  {
    id: '1',
    title: 'Tech Talk: AI in Startups',
    date: new Date('2024-12-15'),
    time: '6:00 PM',
    location: 'Bend Tech Hub',
    type: 'tech-talk' as const,
  },
  {
    id: '2',
    title: 'Startup Networking Mixer',
    date: new Date('2024-12-18'),
    time: '5:30 PM',
    location: 'Deschutes Brewery',
    type: 'networking' as const,
  },
  {
    id: '3',
    title: 'Pitch Competition Finals',
    date: new Date('2024-12-22'),
    time: '7:00 PM',
    location: 'Tower Theatre',
    type: 'pitch-competition' as const,
  },
  {
    id: '4',
    title: 'Workshop: Building Your MVP',
    date: new Date('2024-12-28'),
    time: '9:00 AM',
    location: 'COCC Campus',
    type: 'workshop' as const,
  },
]

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const dayNames = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

export default function EventsCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  // Generate calendar days
  const calendarDays = []
  
  // Previous month's trailing days
  const prevMonth = new Date(year, month - 1, 0)
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    calendarDays.push({
      date: new Date(year, month - 1, prevMonth.getDate() - i),
      isCurrentMonth: false,
      isToday: false,
      hasEvent: false,
    })
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day)
    const isToday = date.toDateString() === new Date().toDateString()
    const hasEvent = mockEvents.some(event => 
      event.date.toDateString() === date.toDateString()
    )
    
    calendarDays.push({
      date,
      isCurrentMonth: true,
      isToday,
      hasEvent,
    })
  }

  // Next month's leading days
  const remainingDays = 42 - calendarDays.length // 6 weeks * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    calendarDays.push({
      date: new Date(year, month + 1, day),
      isCurrentMonth: false,
      isToday: false,
      hasEvent: false,
    })
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getEventsForDate = (date: Date) => {
    return mockEvents.filter(event => 
      event.date.toDateString() === date.toDateString()
    )
  }

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : []

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Event Calendar (Coming Soon)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Stay up to date with all our upcoming events. Click on any date to see what's happening.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm border p-6"
            >
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigateMonth('prev')}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h3 className="text-lg font-semibold text-gray-900">
                  {monthNames[month]} {year}
                </h3>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigateMonth('next')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Day Names */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(day.date)}
                    className={`
                      h-10 w-full text-sm rounded-md transition-colors
                      ${!day.isCurrentMonth 
                        ? 'text-gray-300 hover:bg-gray-50' 
                        : day.isToday
                        ? 'bg-oregon-blue-600 text-white hover:bg-oregon-blue-700'
                        : selectedDate?.toDateString() === day.date.toDateString()
                        ? 'bg-oregon-blue-100 text-oregon-blue-700 hover:bg-oregon-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                      ${day.hasEvent ? 'font-semibold' : ''}
                    `}
                  >
                    <div className="flex items-center justify-center">
                      {day.date.getDate()}
                      {day.hasEvent && (
                        <div className="w-1 h-1 bg-oregon-blue-600 rounded-full ml-1"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Event Details */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm border p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <CalendarIcon className="h-5 w-5 text-oregon-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedDate ? formatDate(selectedDate) : 'Select a date'}
                </h3>
              </div>

              {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateEvents.map((event) => (
                    <div key={event.id} className="border-l-4 border-oregon-blue-600 pl-4">
                      <h4 className="font-semibold text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {event.time} • {event.location}
                      </p>
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-oregon-blue-100 text-oregon-blue-800 rounded">
                        {event.type.replace('-', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              ) : selectedDate ? (
                <p className="text-gray-500 text-sm">No events scheduled for this date.</p>
              ) : (
                <p className="text-gray-500 text-sm">Click on a date to see events.</p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
