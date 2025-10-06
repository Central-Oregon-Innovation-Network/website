import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/COIN_logo.png"
                alt="Central Oregon Innovation Network Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Empowering the innovation community in Central Oregon - one resource, connection, collaboration, and event at a time.
            </p>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bend, Oregon</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">kyle@centraloregoninnovation.com</span>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">COIN</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/events" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Events
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/communities" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Communities
                    </Link>
                  </li>
                  <li>
                    <Link href="/sponsors" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Sponsors
                    </Link>
                  </li> */}
                </ul>
              </div>
              {/* <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/resources" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Startup Toolkit
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources#mentorship" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Mentorship
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources#funding" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Funding
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources#coworking" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Co-working Spaces
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2024 Central Oregon Innovation Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
