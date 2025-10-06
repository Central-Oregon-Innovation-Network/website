'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Mountain } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  // { name: 'Communities', href: '/communities' },
  // { name: 'Sponsors', href: '/sponsors' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 pointer-events-auto">
      <div className="flex items-center justify-between p-6 lg:px-8">
        <Link href="/" className="flex lg:flex-1">
          <div className="p-2 flex items-center bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white transition-colors relative z-50 cursor-pointer">
            <img
              src="/images/COIN_logo.png"
              alt="Central Oregon Innovation Network Logo"
              className="h-12 w-auto"
            />
          </div>
        </Link>
        
        <div className="flex lg:hidden ml-4">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <nav className="hidden lg:flex lg:gap-x-8 lg:items-center" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-oregon-blue-200 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:ml-8">
          <Button 
            variant="oregon" 
            size="lg"
            onClick={() => {
              const element = document.getElementById('newsletter-signup');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Us!
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="p-2 flex items-center bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors">
                <img
                  src="/images/COIN_logo.png"
                  alt="Central Oregon Innovation Network Logo"
                  className="h-12 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <nav className="space-y-2 py-6" aria-label="Mobile navigation">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="py-6">
                  <Button 
                    variant="oregon" 
                    size="lg" 
                    className="w-full"
                    onClick={() => {
                      const element = document.getElementById('newsletter-signup');
                      element?.scrollIntoView({ behavior: 'smooth' });
                      setMobileMenuOpen(false);
                    }}
                  >
                    Join Us!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
