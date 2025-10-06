'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Calendar, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-oregon-blue-400 to-oregon-green-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        <Image
          src="/images/coin_hero.png"
          alt="Central Oregon Innovation Network - Tech entrepreneur working in nature"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Central Oregon Innovation Network
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Helping entrepreneurs turn vision to reality - one spectacular startup at a time.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/about">
              <Button variant="oregon" size="xl" className="group">
                About us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button 
              variant="oregonOutline" 
              size="xl" 
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={() => {
                const element = document.getElementById('newsletter-signup');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Join Us!
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by the Central Oregon tech community
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-200">
              Join hundreds of entrepreneurs, founders, and innovators building the future in Central Oregon
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col bg-white/5 backdrop-blur-sm p-8"
            >
              <dt className="text-sm font-semibold leading-6 text-gray-300">Members</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white flex items-center justify-center">
                <Users className="w-8 h-8 mr-2" />
                500+
              </dd>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col bg-white/5 backdrop-blur-sm p-8"
            >
              <dt className="text-sm font-semibold leading-6 text-gray-300">Events This Year</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white flex items-center justify-center">
                <Calendar className="w-8 h-8 mr-2" />
                12+
              </dd>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col bg-white/5 backdrop-blur-sm p-8"
            >
              <dt className="text-sm font-semibold leading-6 text-gray-300">Startups Supported</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white flex items-center justify-center">
                <Lightbulb className="w-8 h-8 mr-2" />
                30+
              </dd>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col bg-white/5 backdrop-blur-sm p-8"
            >
              <dt className="text-sm font-semibold leading-6 text-gray-300">Years Building Community in Central Oregon</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                8+
              </dd>
            </motion.div>
          </dl>
        </div>
      </div>
    </div>
  )
}
