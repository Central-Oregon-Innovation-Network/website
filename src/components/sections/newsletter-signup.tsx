'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CheckCircle } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
      } else {
        throw new Error('Failed to subscribe')
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div id="newsletter-signup" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Keep in touch – stay up to date!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Sign up for our newsletter to be the first to know about our events, keep up to date with community happenings, and stay apprised of all things tech and entrepreneurship in Central Oregon and beyond.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-16 max-w-md"
        >
          {isSubmitted ? (
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-oregon-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Thanks for subscribing!
              </h3>
              <p className="text-gray-600">
                We'll keep you updated on all the latest events and community news.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-x-4">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-auto"
                />
              </div>
              <Button
                type="submit"
                variant="oregon"
                size="lg"
                disabled={isLoading}
                className="flex-none"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing up...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Sign Up
                  </div>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
